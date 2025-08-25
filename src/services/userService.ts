import UserModel from "@/models/User";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const createUser = async (user: User) => {
  const newUser = await UserModel.create({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  });

  return newUser;
}

export const findUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email }).lean();

  return user;
}
