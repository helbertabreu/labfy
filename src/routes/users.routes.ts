import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userRequestSerializer } from "../serializers/user.serializers";
import {
  createUserController,
  deleteUserController,
  listUserByIdController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";

export const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userRequestSerializer),
  createUserController
);
userRoutes.delete("/profile/:id", deleteUserController);
userRoutes.get("", listUsersController);
userRoutes.get("/profile/:id", listUserByIdController);
userRoutes.patch("/profile/:id", updateUserController);
