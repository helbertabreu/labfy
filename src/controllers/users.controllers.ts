import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/user.interface";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { listUserByIdService } from "../services/users/listUserById.service";
import { updateUserService } from "../services/users/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  await deleteUserService(userId);

  return res.status(204).json({});
};

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.status(200).json(users);
};

export const listUserByIdController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const user = await listUserByIdService(userId);

  return res.status(200).json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const userData: IUserUpdate = req.body;
  const newUser = await updateUserService(userId, userData);

  return res.status(200).json(newUser);
};
