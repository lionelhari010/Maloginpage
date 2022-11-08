import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const usernameHandler = (event) => {
    setUserName(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (e) => {
    if (username == "artwork" && password == "artwork") {
      e.preventDefault();
      navigate("/home");
    }
  };
  return (
    <div>
      <div className="flex w-full">
        {/* Left side */}
        <div className="flex bg-white rounded-lg md:ml-2 md:px-12 flex-col pt-16 w-full md:w-1/2">
          {/* Logo */}
          <div className="w-56 mx-auto md:mx-0">
            <img src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1667819859/main-logo_img_kfuvh2.png"></img>
          </div>
          <div>
            <h2 className="font-bold mb-6 text-center md:text-left text-2xl">
              Artwork Management System
            </h2>
            <p className="mb-16 w-2/3 mx-auto md:mx-0 leading-7">
              End-to-End Packaging and Artwork Management platform for
              <span className="px-1 font-bold text-md text-orange-500">
                Pharma & CPG
              </span>
              Companies.
            </p>
          </div>
          {/* input field */}
          <div className="flex mx-auto md:mx-0 space-x-28">
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium mb-2">
                Username
              </label>
              <input
                type="email"
                className="border peer border-slate-200  focus:invalid:border-red-500 valid:border-green-500  bg-slate-100 p-3 rounded-lg mt-2 outline-none"
                onChange={usernameHandler}
                value={username}
                placeholder="name@company.com"
                required
              />
              <p class="mt-2 invisible peer-focus:peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                min={1}
                max={6}
                className="border peer bg-slate-100 out-of-range:border-green-500 focus:in-range:border-red-500  p-3 rounded-lg mt-2 outline-none"
                onChange={passwordHandler}
                value={password}
                placeholder="Enter password"
                required
              />
              <p class="mt-2 invisible peer-focus:peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid password.
              </p>
            </div>
          </div>
          {/* Forget pass */}
          <div className="flex md:mt-16 mt-10 mx-auto md:mx-0 md:space-x-64 space-x-60 ">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-blue-500"
                name=""
                id="remember"
              />
              <label
                htmlFor="remember"
                className="text-gray-400 cursor-pointer"
              >
                Remember Me
              </label>
            </div>
            <div>
              <a href="#" className="text-blue-500 font-medium md:ml-4">
                Forget Password?
              </a>
            </div>
          </div>
          {/* Sign btn */}
          <div className="mb-12">
            <button
              onClick={submitHandler}
              className="bg-blue-700 md:mx-0 mx-4  font-medium py-3 rounded-xl md:w-4/5 w-full mt-20  text-white"
            >
              Sign in to your account
            </button>
          </div>
        </div>

        {/*  Right side */}
        <div className="w-1/2 hidden md:block max-h-full">
          <img
            src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1667820448/bg-imgart_i44lqs.png"
            alt=""
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
