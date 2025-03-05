import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toogleSingInForm = () => {
    // Change to sign up form
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // Sign In / Sign Up Logic
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://shorturl.at/ehH5g",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black/80 p-12 my-36 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4 my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            required
            className="p-2 my-2 bg-gray-700 rounded-md w-full"
          />
        )}

        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          required
          className="p-2 my-2 bg-gray-700 rounded-md w-full"
        />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          required
          className="p-2 my-2 bg-gray-700 rounded-md w-full"
        />

        <p className="font-bold text-red-500 text-lg p-2">{errorMessage}</p>

        <button
          className="bg-red-600 px-4 py-2 my-6 rounded-md w-full cursor-pointer"
          onClick={handleButtonClick}
        >
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
