import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    // To deconstruct the object from request body
    const { fullname, email, password, role } = req.body;
    // To check if any required fields are missing
    if (!fullname || !email || !password || !role)
      res.status(400).json({
        message: "Some required field(s) is/are missing!",
        success: false,
      });

    // To check if the user account already exits with the given email address
    const user = await User.findOne({ email });
    if (user)
      res.status(400).json({
        message: "Account with this emailID already exists.",
        success: false,
      });

    const Hashedpassword = await bcrypt.hash(password, 8);
    await User.create({
      fullname,
      email,
      password: Hashedpassword,
      role,
    });
    const data = {
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Account was successfully created.",
      success: true,
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  try {
    // To deconstruct the object from request body
    const { email, password, role } = req.body;
    // To check if any required fields are missing
    if (!email || !password || !role)
      res.status(400).json({
        message: "Some required field(s) is/are missing!",
        success: false,
      });
    // To check if valid email and password was entered.
    const user = await User.findOne({ email });
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordMatching)
      res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    // To check if valid role was entered.
    if (role != user.role)
      res.status(400).json({
        message: "Incorrect existing role was entered.",
        success: false,
      });

    return res.status(200).json({
      message: "Logged in successfully.",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};