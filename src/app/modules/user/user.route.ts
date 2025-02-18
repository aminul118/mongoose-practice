import express from "express";
import { userController } from "./user.controller";
const Router = express.Router();

Router.get("/", userController);
