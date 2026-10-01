import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: {
    name: "Deepak",
    _id: 123,
    age: 20,
  },

  isLoading: false,

  login: () => {
    console.log("we just logged in");
    set({ isLoading: true });
  },
}));
