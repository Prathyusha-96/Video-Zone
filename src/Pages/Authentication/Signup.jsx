import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context";
import './auth.css';

export const Signup = () => {
  const { signupHandler } = useAuth();

  const [signup, setSignup] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  return (
    <div>
    <main className="container">
      <div className="signup-form">
        <div className="signup-title">
          <h2 className="heading text-center">Sign Up</h2>
        </div>
        <div className="input">
          <label htmlFor="firstname">First Name</label>
          <input
            className="input-txt"
            type="text"
            placeholder="John"
            value={signup.firstName}
            onChange={(e) =>
              setSignup({ ...signup, firstName: e.target.value })
            }
          />
        </div>
        <div className="input">
          <label htmlFor="lastname">Last Name</label>
          <input
            className="input-txt"
            type="text"
            placeholder="Doe"
            value={signup.lastName}
            onChange={(e) => setSignup({ ...signup, lastName: e.target.value })}
          />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            className="input-txt"
            type="email"
            placeholder="abc@gmail.com"
            value={signup.email}
            onChange={(e) => setSignup({ ...signup, email: e.target.value })}
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            className="input-txt"
            type="password"
            value={signup.password}
            placeholder="*********"
            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
          />
        </div>

        <div className="btn-signup text-center">
          <button
            onClick={() =>
              signupHandler(
                signup.email,
                signup.password,
                signup.firstName,
                signup.lastName
              )
            }
            className="btn btn-primary"
          >
            Create New Account
          </button>
        </div>
        <div className="text-center">
          <span>
            Alredy a Member?
            <Link to="/login" className="login-link fw-400">
              Login 
            </Link>
          </span>
        </div>
      </div>
    </main>
    </div>
  );
};