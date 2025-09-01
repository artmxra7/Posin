import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import loginBg from "../../../assets/images/login_bg.jpg";
import logo from "../../../assets/images/logo.png";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-sans">
      {/* KIRI - Form Login */}
      <div className="flex flex-col justify-center px-10 md:px-20 bg-white">
        <div className="max-w-md w-full mx-auto">
          {/* Logo */}
          <div className="mb-6">
            <img src={logo} alt="Logo" className="w-12 h-12 mx-auto" />
          </div>

          {/* Judul */}
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-gray-500 mb-8">
            Access your POS dashboard to control sales & stock efficiently.
          </p>

          {/* Form */}
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your mail address"
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter password"
                />
                <span
                  className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </span>
              </div>
            </div>

            {/* Remember me & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-indigo-500" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Button Login */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white py-2 rounded-lg font-semibold"
            >
              Log In
            </button>
          </form>
        </div>
      </div>

      {/* KANAN - Background */}
      <div
        className="hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      ></div>
    </div>
  );
}
