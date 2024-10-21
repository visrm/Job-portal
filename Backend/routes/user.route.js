import express from "express";
import {
  getUserById,
  getUsers,
  logIn,
  logOut,
  register
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/authentication.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(logIn);
router.route("/logout").get(logOut)
router.route("/users").get(isAuthenticated, getUsers);
router.route("/users/:id").get(isAuthenticated, getUserById);

export default router;
