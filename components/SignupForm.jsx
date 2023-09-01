"use client";
import { useState } from "react";
import GoogleButton from "./GoogleBtn";
const SignupForm = () => {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleSubmit() {}
  function handleChange(event) {
    setuserData({ ...userData, [event.target.id]: event.target.value });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex-col">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="email"
          className="input"
          onChange={handleChange}
          value={userData.email}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          className="input"
          onChange={handleChange}
          value={userData.password}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="input"
          onChange={handleChange}
          value={userData.password}
          required
        />
        <button type="submit" className="btn" style={{ margin: "10px auto" }}>
          Signup
        </button>
      </form>
    </>
  );
};

export default SignupForm;
