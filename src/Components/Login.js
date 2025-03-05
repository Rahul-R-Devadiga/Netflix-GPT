import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toogleSingInForm = () => {
    // Change to sign up form
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
          alt="background-img"
        />
      </div>

      <form
        action=""
        className="absolute w-3/12 bg-black/80 p-12 my-36 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4 my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            required
            className="p-2 my-2 bg-gray-700 rounded-md w-full"
          />
        )}

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
          className="p-2 my-2 bg-gray-700 rounded-md w-full"
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          className="p-2 my-2 bg-gray-700 rounded-md w-full"
        />

        <button className="bg-red-600 px-4 py-2 my-6 rounded-md w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={() => toogleSingInForm()}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already on Netflix? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
