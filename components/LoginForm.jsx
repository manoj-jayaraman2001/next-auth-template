"use client";
import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  function handleSubmit() {}
  function handleChange(event) {
    setCredentials({ ...credentials, [event.target.id]: event.target.value });
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
          value={credentials.email}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          className="input"
          onChange={handleChange}
          value={credentials.password}
          required
        />
        <Link href='/' className="link-text" style={{margin: '5px auto', fontSize: '13.5px'}}>Forgot Password?</Link>
        <button type="submit" className="btn" style={{ margin: "10px auto" }}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
