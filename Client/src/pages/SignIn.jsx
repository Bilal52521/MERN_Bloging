import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setformData] = useState({});
  const [errMessage, setErrMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const subbmitHandle = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrMessage("Please Fill the Feilds");
    }
    try {
      setErrMessage(null);
      setLoading(true);
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        return setErrMessage(data.message || "Operation failed.");
      }

      console.log("Sign-up successful:", data);
      setLoading(false);

      navigate("/");
    } catch (error) {
      setErrMessage(error.message || "Please fill in all fields correctly.");
      console.log("Fetching error ");
      setLoading(false);
    }
  };

  const eventHandle = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-3">
        {/* lift side */}
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
        {/* right side */}
        <div className="flex-1">
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={subbmitHandle}
          >
            <div className="">
              <Label value="User Email" />
              <TextInput
                type="email"
                placeholder="email@company.com"
                id="email"
                onChange={eventHandle}
              />
            </div>
            <div className="">
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
            <span>Have an account? </span>
            <Link to="/signup" className="text-blue-500">
              Sing-Up
            </Link>
          </div>
          {errMessage && (
            <Alert className="mt-4 " color="failure">
              {errMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
