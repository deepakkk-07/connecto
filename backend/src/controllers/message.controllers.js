import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.js";
import User from "../models/User.js";
import { getReceiverSocketId, io } from "../lib/socket.js";

export const getAllContacts = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getAllcontacts", error);
    res.status(500).json({ message: "server error" });
  }
};

export const getMessagesByUserId = async (req, res) => {
  try {
    const myId = req.user._id;
    const { id: userToChatId } = req.params;

    const messages = await Message.find({
      $or: [
        {
          senderId: myId,
          receiverId: userToChatId,
        },
        {
          senderId: userToChatId,
          receiverId: myId,
        },
      ],
    }).sort({createdAt:1});

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller:", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // Check text or image
    if (!text && !image) {
      return res.status(400).json({
        message: "Text or image is required.",
      });
    }

    // Prevent sending message to yourself
    if (senderId.toString() === receiverId.toString()) {
      return res.status(400).json({
        message: "Cannot send messages to yourself.",
      });
    }

    // Check receiver exists
    const receiverExists = await User.exists({
      _id: receiverId,
    });

    if (!receiverExists) {
      return res.status(404).json({
        message: "Receiver not found",
      });
    }

    // Upload image to Cloudinary
    let imageUrl;

    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    // Create message
    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    // Send real-time message
    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error.message);

    res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const getChatPartners = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const messages = await Message.find({
      $or: [{ senderId: loggedInUserId }, { receiverId: loggedInUserId }],
    }).sort({createdAt:-1});

    const chatPartnersIds = [
      ...new Set(
        messages.map((msg) =>
          msg.senderId.toString() === loggedInUserId.toString()
            ? msg.receiverId.toString()
            : msg.senderId.toString(),
        ),
      ),
    ];

      const users = await User.find({
      _id: { $in: chatPartnersIds },
    }).select("-password");

    const chatPartners = chatPartnersIds
      .map((id) => users.find((u) => u._id.toString() === id))
      .filter(Boolean);

    res.status(200).json(chatPartners);
  } catch (error) {
    console.log("Error in getChatPartners:", error.message);

    res.status(500).json({
      error: "Internal error",
    });
  }
};
