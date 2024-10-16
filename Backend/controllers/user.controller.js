import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    // To deconstruct the object from request body
    const { fullname, phoneNo, email, password, role } = await req.body;

    // To check if any required fields are missing
    if (!fullname || !phoneNo || !email || !password || !role)
      res.status(400).json({
        message: "Some field(s) are missing!",
        success: false
      });

    // To check if the user account already exists with the given email address.
    let user = await User.findOne({ email });
    if (user)
      res.status(400).json({
        message: "Account with this email address already exists.",
        success: false
      });

    const Hashedpassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      phoneNo,
      email,
      password: Hashedpassword,
      role
    });

    return res.status(200).json({
      message: "Account was successfully created.",
      success: true
    });
  } catch (err) {
    console.log(err);
  }
};

export const logIn = async (req, res) => {
  try {
    // To deconstruct the object from request body
    const { email, password, role } = req.body;

    // To check if any required fields are missing
    if (!email || !password || !role)
      res.status(400).json({
        message: "Some required field(s) are missing!",
        success: false
      });

    // To check if valid email and password was entered.
    let user = await User.findOne({ email });
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordMatching)
      res.status(400).json({
        message: "Incorrect email or password.",
        success: false
      });

    // To check if valid role was entered.
    if (role != user.role)
      res.status(400).json({
        message: "Account doesn't exist with the entered role.",
        success: false
      });
    const tokenData = {
      userID: user._id
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d"
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      profile: user.profile
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict"
      })
      .json({
        message: `${user.fullname} successfully logged in.`,
        user,
        success: true
      });
  } catch (err) {
    console.log(err);
  }
};

export const logOut = async (req, res) => {
  try {
    // To forget the token stored in cookie
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully.",
      success: true
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProfile = async (req, res) => {
  try {
    // To deconstruct the object from request body
    const { fullname, phoneNo, email, bio, skills } = req.body;
    let skillsArray;
    // To split skills into array elements (based on separator: ",").
    if (skills) skillsArray = skills.split(",");
    // `userid` stores the `id` of object from request body.
    const userid = req.id;
    let user = await User.findById(userid);
    // To check if the user account exists.
    if (!user)
      res.status(400).json({
        message: "User doesn't exist",
        success: false
      });

    // Updating User data
    if (fullname) user.fullname = fullname;
    if (phoneNo) user.phoneNo = phoneNo;
    if (email) user.email = email;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;
    // To saved the updated data of user.
    await user.save();

    user = {
      fullname: user.fullname,
      phoneNo: user.phoneNo,
      email: user.email,
      bio: user.profile.bio,
      skills: user.profile.skills
    };

    return res.status(200).json({
      message: "User Updated.",
      user,
      success: true
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users)
      res.status(404).json({ message: "Users doesn't exist.", success: false });

    // To fetch user data based on id query parameter.
    const userId = req.query.id;

    if (userId){
      const userByIdQuery = await User.findById(userId);
      return res.status(200).json(userByIdQuery);
    } 

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user)
      res.status(404).json({ message: "User doesn't exist.", success: false });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error.", success: false });
  }
};
