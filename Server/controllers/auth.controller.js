import User from "../models/user.model.js";
import bcryptpass from "bcrypt";
import { errHandler } from "../utils/errMessage.js";
import jwt from "jsonwebtoken";

export const sign_up = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      password === "" ||
      email === ""
    ) {
      return next(errHandler(400, "All fields are rquired!"));
    }

    const passwordHashed = await bcryptpass.hash(password, 11);

    const addUser = new User({
      username,
      email,
      password: passwordHashed,
    });

    await addUser.save();

    res.status(201).json({ message: "User successfully created!" });
  } catch (error) {
    console.error("Error creating user:", error);
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errHandler(400, "All fields are rquired!"));
  }

  try {
    const userValid = await User.findOne({ email });
    if (!userValid) {
      return next(errHandler(404, "User not found!"));
    }
    const passwordValid = bcryptpass.compareSync(password, userValid.password);

    if (!passwordValid) {
      return next(errHandler(400, "Invalid Password!"));
    }

    const token = jwt.sign({ userId: userValid._id }, process.env.JWT_SECRET);

    const {password : pass , ...rest} = userValid._doc;

    res.status(200).cookie("access_token", token).json(rest);
  } catch (error) {
    next(error);
  }
};
 