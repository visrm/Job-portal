import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: String,
      required: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
      required: true,
    },
  },
  { timestamps: true });

const Application = mongoose.model("Application", applicationSchema);
export default Application;
