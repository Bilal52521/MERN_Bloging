import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  singInStart,
  singInSuccess,
  singInFailuer,
} from "../redux/user/userSlice.js";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const submitHandle = async (e) => {
  //   e.preventDefault();
  //   if (!formData.email || !formData.password) {
  //     return dispatch(singInFailuer("Please fill in all the fields."));
  //   }
  //   try {
  //     dispatch(singInStart());
  //     const response = await fetch("/api/auth/signin", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (!data.success) {
  //       return dispatch(singInFailuer(data.message || "Operation failed."));
  //     }

  //     console.log("Sign-in successful:", data);

  //     navigate("/");
  //     dispatch(singInSuccess(data));
  //   } catch (error) {
  //     dispatch(
  //       singInFailuer(error.message || "An error occurred. Please try again.")
  //     );
  //   }
  // };

  const submitHandle = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(singInFailuer("Please fill in all the fields."));
    }
    try {
      dispatch(singInStart());
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      // console.log("API Response Data:", data); // Debugging

      if (response.ok || data.success) {
        dispatch(singInSuccess(data.user)); // Assuming `data.user` contains user details
        console.log("Navigating to home...");
        navigate("/"); // Redirect to home page
      } else {
        dispatch(singInFailuer(data.message || "Authentication failed."));
      }
    } catch (error) {
      console.error("Error during sign-in:", error); // Debugging
      dispatch(
        singInFailuer(error.message || "An error occurred. Please try again.")
      );
    }
  };

  const eventHandle = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-3">
        {/* Left side */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-3 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
              Phi Horizon's
            </span>
            Blogs
          </Link>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae optio
            beatae soluta odio est aperiam, similique provident quis voluptates
            excepturi. Necessitatibus impedit natus minima voluptatibus dolore
            quasi error, assumenda dicta?
          </p>
        </div>
        {/* Right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={submitHandle}>
            <div>
              <Label value="User Email" />
              <TextInput
                type="email"
                placeholder="email@company.com"
                id="email"
                onChange={eventHandle}
              />
            </div>
            <div>
              <Label value="User Password" />
              <TextInput
                type="password"
                placeholder="******"
                id="password"
                onChange={eventHandle}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-4">
            <span>Don't have an account?</span>
            <Link to="/signup" className="text-blue-500">
              Sign-Up
            </Link>
          </div>
          {errMessage && (
            <Alert className="mt-4" color="failure">
              {errMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
