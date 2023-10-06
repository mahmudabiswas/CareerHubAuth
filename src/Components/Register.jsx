import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useState } from "react";
const Register = () => {
  const { SignIn } = useContext(AuthContext);
  const [error, setError] = useState();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    SignIn(email, password)
      .then((result) => {
        console.log("click", result.user);
      })
      .catch((error) => {
        setError(error.massage);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-10">Login now!</h1>
          </div>
          <p>{error}</p>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
          <Link to="/logIn">
            <h1>
              All Ready you Have an Accoutnt ?{" "}
              <span className="text-red-400">logIn</span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
