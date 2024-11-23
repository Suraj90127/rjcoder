import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111827]">
      <div className="w-full max-w-md bg-[#1f2937] rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white text-center mb-2">
            {isLogin ? "Login" : "Register"}
          </h2>
          <p className="text-center text-white mb-6">
            {isLogin
              ? "Enter your credentials to access your account"
              : "Create a new account to get started"}
          </p>
          <form>
            <motion.div
              initial={false}
              animate={{
                height: isLogin ? "auto" : 0,
                opacity: isLogin ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="space-y-4 overflow-hidden"
            >
              <div>
                <label
                  htmlFor="email-login"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Email
                </label>
                <input
                  id="email-login"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-none"
                />
              </div>
              <div>
                <label
                  htmlFor="password-login"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Password
                </label>
                <input
                  id="password-login"
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-none"
                />
              </div>
            </motion.div>
            <motion.div
              initial={false}
              animate={{
                height: isLogin ? 0 : "auto",
                opacity: isLogin ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="space-y-4 overflow-hidden"
            >
              <div>
                <label
                  htmlFor="name-register"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Name
                </label>
                <input
                  id="name-register"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email-register"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Email
                </label>
                <input
                  id="email-register"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-none"
                />
              </div>
              <div>
                <label
                  htmlFor="password-register"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Password
                </label>
                <input
                  id="password-register"
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-none"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-none"
                />
              </div>
            </motion.div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-none focus:ring-none"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              className="ml-1 text-orange-500 underline focus:outline-none"
              onClick={toggleForm}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
