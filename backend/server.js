// const express = require("express");
import express from "express";
import dotenv from "dotenv";

import authRoutes from "./src/routes/auth.routes.js";

import msgRoutes from "./src/routes/message.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/message", msgRoutes);

app.listen(PORT, () => console.log("server running on http://localhost:3000/"));
