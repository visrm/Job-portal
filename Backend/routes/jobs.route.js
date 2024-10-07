import { Router } from "express";
import { postJob, getJobs, getJobByID } from "../controllers/job.controller.js";
import isAutheticated from "../middlewares/authetication.js";

const router = Router();
router.route("/post").post(postJob);
router.route("/get").get(isAutheticated, getJobs);
router.route("/get/:id").get(isAutheticated, getJobByID);

export default router