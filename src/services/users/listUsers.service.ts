import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserResponse } from "../../interfaces/user.interface";
import { listUsersSerializer } from "../../serializers/user.serializers";

export const listUsersService = async (): Promise<IUserResponse[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  if (users.length === 0) {
    throw new AppError("Nenhum usuário cadastrado.", 200);
  }

  const usersResponse = await listUsersSerializer.validate(users, {
    stripUnknown: true,
  });

  return usersResponse;
};
