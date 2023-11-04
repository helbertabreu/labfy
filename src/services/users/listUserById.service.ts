import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const removePasswordField = (user: User) => {
  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
};

export const listUserByIdService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUserById = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!foundUserById) {
    throw new AppError("User not found", 404);
  }

  return removePasswordField(foundUserById);
};
