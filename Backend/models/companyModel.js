import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
    },
    website: { type: String },
    logo: { type: String },
    email: {
      type: String,
    },
    handler: { // The ID that handles the company account
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true });

const Company = mongoose.model("Company", companySchema);
export default Company;
