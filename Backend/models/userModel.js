import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      bio: { type: String },
      skills: { type: String },
      resume : { type: String}, // URL to resume file
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      profileImg: { type: String, default: "" },
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
      required: true,
    },
  },
  { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
