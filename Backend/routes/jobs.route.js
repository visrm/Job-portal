import express from "express";
import { postJob, getJobs, getJobByID } from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/authentication.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getJobs);
router.route("/get/:id").get(isAuthenticated, getJobByID);

export default router