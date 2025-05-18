import React, { useState } from "react";
import zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginformSchema = zod.object({
  number: zod.string().min(1, { message: "Number is required" }),
  password: zod.string().min(1, { message: "Password is required" }),
});

const registerformSchema = zod.object({
  username: zod.string().min(1, { message: "Username is required" }),
  number: zod.string().min(1, { message: "Number is required" }),
  password: zod.string().min(1, { message: "Password is required" }),
});

const loginformOptions = {
  resolver: zodResolver(loginformSchema),
  defaultValues: {
    number: "",
    password: "",
  },
};

const registerformOptions = {
  resolver: zodResolver(registerformSchema),
  defaultValues: {
    username: "",
    number: "",
    password: "",
  },
};

const Authentication = () => {
  const [authenticate, setAuthenticate] = useState("login");
  const [fade, setFade] = useState(true);

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm(loginformOptions);

  const {
    register: signupRegister,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
  } = useForm(registerformOptions);

  const onLoginSubmit = (data) => {
    console.log("Login data:", data);
  };

  const onSignupSubmit = (data) => {
    console.log("Signup data:", data);
  };

  // Helper to handle fade out/in on switch
  const handleSwitch = (mode) => {
    setFade(false);
    setTimeout(() => {
      setAuthenticate(mode);
      setFade(true);
    }, 300); // match transition duration
  };

  return (
    <div>
      <div
        className={`transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {authenticate === "login" ? (
          <form
            onSubmit={handleLoginSubmit(onLoginSubmit)}
            className="w-[100%] space-y-5"
          >
            <h1 className="text-5xl text-center text-gray-900 font-serif">
              Welcome back!
            </h1>
            <h1 className="text-center text-4xl font-medium text-gray-600 font-serif">
              Login
            </h1>
            {/* ...login form fields... */}
            <div className="flex flex-col gap-2">
              <label htmlFor="number">Phone Number</label>
              <input
                type="text"
                id="number"
                {...loginRegister("number")}
                placeholder="Your Phone Number"
                className="border-2 border-gray-300 rounded-md p-2 shadow-sm outline-none "
              />
              {loginErrors.number && (
                <span className="text-red-500 text-sm">
                  {loginErrors.number.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...loginRegister("password")}
                placeholder="Your Password"
                className="border-2 border-gray-300 rounded-md p-2 shadow-sm outline-none "
              />
              {loginErrors.password && (
                <span className="text-red-500 text-sm">
                  {loginErrors.password.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-gray-900 w-full text-white py-4 rounded-xl cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out text-xl"
            >
              Login
            </button>
            <p className="text-md text-gray-500 text-center">
              Don't have an account?{" "}
              <span
                onClick={() => handleSwitch("signup")}
                className="text-gray-900 font-semibold hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </form>
        ) : (
          <form
            onSubmit={handleSignupSubmit(onSignupSubmit)}
            className="w-[100%] space-y-5"
          >
            {/* ...signup form fields... */}
            <h1 className="text-center text-5xl font-medium text-gray-600 font-serif">
              Sign Up
            </h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                {...signupRegister("username")}
                placeholder="Your Username"
                className="border-2 border-gray-300 rounded-md p-2 shadow-sm outline-none "
              />
              {signupErrors.username && (
                <span className="text-red-500 text-sm">
                  {signupErrors.username.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="number">Phone Number</label>
              <input
                type="text"
                id="number"
                {...signupRegister("number")}
                placeholder="Your Phone Number"
                className="border-2 border-gray-300 rounded-md p-2 shadow-sm outline-none "
              />
              {signupErrors.number && (
                <span className="text-red-500 text-sm">
                  {signupErrors.number.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...signupRegister("password")}
                placeholder="Your Password"
                className="border-2 border-gray-300 rounded-md p-2 shadow-sm outline-none "
              />
              {signupErrors.password && (
                <span className="text-red-500 text-sm">
                  {signupErrors.password.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-gray-900 w-full text-white py-4 rounded-xl cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out text-xl"
            >
              Sign Up
            </button>
            <p className="text-md text-gray-500 text-center">
              Already have an account?{" "}
              <span
                onClick={() => handleSwitch("login")}
                className="text-gray-900 font-semibold hover:underline cursor-pointer"
              >
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Authentication;
