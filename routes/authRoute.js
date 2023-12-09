import express from "express";
import {

  forgotPasswordController,
  loginController,
  registerController,
  testcontroller,
} from "../controller/authController.js";
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", requireSignIn, isAdmin, testcontroller);
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
router.get("/forgot-password", forgotPasswordController);

export default router;
