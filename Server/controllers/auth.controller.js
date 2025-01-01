import User from "../models/user.model.js";
import bcryptpass from "bcrypt";
import { errHandler } from "../utils/errMessage.js";

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
