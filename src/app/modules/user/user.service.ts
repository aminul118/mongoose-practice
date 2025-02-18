import IUser from "./user.interface";
import User from "./user.model";

const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  // console.log("USER", user);
  await user.save();
  return user;
};

const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export { createUserToDB, getUsersFromDB };
