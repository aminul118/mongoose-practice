import express from "express";
import { createUser, getUsers } from "./user.controller";

const userRoute = express.Router();

userRoute.get("/", getUsers);
userRoute.post("/create-user", createUser);

export default userRoute;
