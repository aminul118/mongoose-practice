import express from "express";
import { createUser, getUserById, getUsers } from "./user.controller";

const userRoute = express.Router();

userRoute.get("/", getUsers);
userRoute.get("/:id", getUserById);

userRoute.post("/create-user", createUser);

export default userRoute;
