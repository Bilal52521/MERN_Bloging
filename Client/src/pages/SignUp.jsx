import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
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
          <form action="" className="flex flex-col gap-4">
            <div className="">
              <Label value="Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="User Email" />
              <TextInput
                type="email"
                placeholder="email@company.com"
                id="email"
              />
            </div>
            <div className="">
              <Label value="User Password" />
              <TextInput
                type="password"
                placeholder="User Password"
                id="password"
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-4">
            <span>Have an account? </span>
            <Link to="/signin" className="text-blue-500">
              Sing-In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
