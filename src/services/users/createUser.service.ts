import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user.entity";
import { IUserRequest, IUserResponse } from "../../interfaces/user.interface";
import { userResponseSerializer } from "../../serializers/user.serializers";

export const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const emailExists = await userRepository.findOneBy({
    email: userData.email,
  });

  if (emailExists) {
    throw new AppError("Email is alread use.", 409);
  }

  const user = userRepository.create(userData);

  const savedUser = await userRepository.save(user);

  const newUser = await userResponseSerializer.validate(savedUser, {
    stripUnknown: true,
  });

  return newUser;
};
