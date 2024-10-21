import express from "express";
import isAuthenticated from "../middlewares/authentication.js";
import { getCompany, getCompanyById, registerCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);

export default router;