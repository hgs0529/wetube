import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import { protectorMiddleware, publicOnly, uploadAvatar } from "../middlewares";

const router = express.Router();

router.get("/logout", protectorMiddleware, logout);
router
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(uploadAvatar.single("avatar"), postEdit);
router.get("/github/start", publicOnly, startGithubLogin);
router.get("/github/finish", publicOnly, finishGithubLogin);
router
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
router.get("/:id", see);

export default router;
