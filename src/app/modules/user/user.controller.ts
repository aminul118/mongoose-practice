import { Request, Response } from "express";
import User from "./user.model";

const userController = (req: Request, res: Response) => {
  const createUserToDB = async () => {
    const user = new User({
      id: "2",
      role: "student",
      password: "hasib",
      name: {
        firstName: "Md",
        middlName: "Hasibul",
        lastName: "Islam",
      },
      dateOfBirth: "20 Oct 2020",
      gender: "male",
      email: "hasibul@gmail.com",
      contactNo: "01781082065",
      emmergencyNo: "01781082065",
      presentAddress: "Dhaka",
      permanentAddress: "Dhaka",
    });
    await user.save();
  };
  createUserToDB();
  //   res.send({ status: 200, message: "Server is running" });
};

export { userController };
