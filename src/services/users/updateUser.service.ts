import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserResponse, IUserUpdate } from "../../interfaces/user.interface";
import { userResponseSerializer } from "../../serializers/user.serializers";

export const updateUserService = async (
  userId: string,
  userData: IUserUpdate
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUserById = await userRepository.findOneBy({
    id: userId,
  });

  if (!foundUserById) {
    throw new AppError("User not found.", 404);
  }

  const updateUser = userRepository.create({
    ...foundUserById,
    ...userData,
    updated_at: new Date(),
  });

  await userRepository.save(updateUser);

  const updateUserResponse = await userResponseSerializer.validate(updateUser, {
    stripUnknown: true,
  });

  return updateUserResponse;
};
