import React from "react";
import { Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";

export default function App() {
  const { authUser, isLoading, login } = useAuthStore();
  console.log("authUser:", authUser);
  console.log("islogin", isLoading);
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-32 -right-32"></div>

      <div className="relative z-10">{/* Signup card */}</div>
      <button onClick={login} className=" z-10">
        login
      </button>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}
