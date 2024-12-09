import React from "react";
import { Navbar, TextInput, Button, NavbarCollapse } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import "../index.css";

const Header = () => {
  const location = useLocation();

  return (
    <Navbar className="border-b-2">
      <Link className="self-center whitespace-nowrap text-sm sm:text-lg dark:text-white font-semibold">
        <span className="py-2 px-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Phi Horizon's
        </span>{" "}
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button className="" gradientDuoTone="purpleToBlue">
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className={`${
            location.pathname === "/" ? "font-bold text-blue-500" : "text-black"
          } rounded-lg px-4 py-2`}
          as={"div"}
        >
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link
          className={`${
            location.pathname === "/about"
              ? "font-bold text-blue-500"
              : "text-black"
          } rounded-lg px-4 py-2`}
          as={"div"}
        >
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link
          className={`${
            location.pathname === "/projects" ? "font-bold text-blue-500" : ""
          } rounded-lg px-4 py-2`}
          as={"div"}
        >
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;