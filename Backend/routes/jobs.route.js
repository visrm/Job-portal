import express from "express";
import isAuthenticated from "../middlewares/authentication.js";
import { getAdminJobs, getAllJobs, getJobById, postJob, removeJob, updateJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/update/:id").put(isAuthenticated, updateJob);
router.route("/remove/:id").delete(isAuthenticated, removeJob);

export default router;
