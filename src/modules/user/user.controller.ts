import { Request, Response } from "express";
import {
  createUserToDB,
  getUserByIdFromDb,
  getUsersFromDB,
} from "./user.service";

//  Create a user
const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    // console.log(data);
    const user = await createUserToDB(data);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "field",
      message: "user not found",
      error,
    });
  }
};

// Get all users
const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await getUsersFromDB();
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "field",
      message: "user not found",
      error,
    });
  }
};
// Get a users
const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdFromDb(id);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "field",
      message: "user not found",
      error,
    });
  }
};

export { createUser, getUsers, getUserById };
