import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user.entity";

export const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUserById = await userRepository.findOneBy({
    id: userId,
  });

  if (!foundUserById) {
    throw new AppError("User not found.", 404);
  }

  userRepository.delete(userId);
};
