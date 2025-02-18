import IUser from "./user.interface";
import User from "./user.model";

// Create user
const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  // console.log("USER", user);
  await user.save();
  return user;
};

// Get users
const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

// Get a user
const getUserByIdFromDb = async (payload: string) => {
  // console.log(payload);
  const user = await User.findOne({ id: payload });
  return user;
};

export { createUserToDB, getUsersFromDB, getUserByIdFromDb };
