import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import './auth.css';
import { useAuth } from '../../context';

export const Login = () => {
  const { loginHandler } = useAuth();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
    <main className="container">
      <div className="login-form">
        <div className="login-title">
          <h2 className="heading text-center">Login</h2>
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            className="input-txt"
            placeholder="abc@gmail.com"
            type="email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            className="input-txt"
            type="password"
            value={login.password}
            placeholder="********"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </div>
        <div className="btn-signup text-center">
          <button
            onClick={(e) => loginHandler(e, setLogin, login)}
            className="button btn-primary">
           Login
          </button>
          </div>
          <div className="btn-signup text-center">
          <button
            onClick={(e) => loginHandler(e, setLogin, login)}
            className="button btn-secondary"
          >
            Login as Guest
          </button>
        </div>
        <div className="text-center">
          <span>
            Don"t have an Account?
            <Link to="/signup" className="login-link fw-400">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </main>
    </div>
  );
};