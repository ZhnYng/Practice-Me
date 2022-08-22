import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ContentContainer className="flex flex-col justify-center items-center">
      <div className="flex shadow-xl flex-col md:w-[25vw] md:min-w-[400px] w-[80vw]">
        <div className="bg-gray-900 py-2 px-4 font-space font-bold text-white w-full">
          <h1 className="text-3xl">Login</h1>
        </div>

        <form
          className="flex flex-col p-5 md:text-lg bg-gray-700 gap-5"
          onSubmit={handleSubmit}
        >
          <div className="form-control font-mono flex flex-col">
            <label className="text-white" htmlFor="email">
              Email
            </label>
            <input
              required
              className="py-1 px-2 shadow-lg focus:border-none"
              onChange={handleChange}
              id="email"
              value={formData.email}
              type="email"
              name="email"
              placeholder="Enter your email..."
            />
          </div>
          <div className="form-control font-mono flex flex-col">
            <label className="text-white" htmlFor="password">
              Password
            </label>
            <input
              required
              className="py-1 px-2 shadow-lg focus:border-none"
              value={formData.password}
              id="password"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 transition-all font-karla text-white self-start shadow-lg py-1 px-2"
          >
            Login
          </button>
          <p className="text-xs text-white">
            Don't have an account?{" "}
            <u>
              <Link to="/register">Create one.</Link>
            </u>
          </p>
        </form>
      </div>
    </ContentContainer>
  );
}

export default LoginPage;
