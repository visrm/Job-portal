import express from "express";
import { logIn, register, updateProfile } from "../controllers/user.controller.js";
import isAutheticated from "../middlewares/authetication.js";

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(logIn);
router.route('/profile/update').post(isAutheticated,updateProfile);

export default router;