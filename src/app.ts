import express, { Application } from "express";
import cors from "cors";
import userRoute from "./app/modules/user/user.route";
const app: Application = express();

/**
 * ---------------------------
 *  !    Middlewares
 * ----------------------------
 */
// cors
app.use(cors());
// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * ---------------------------
 *  !    Routes
 * ----------------------------
 */
app.use("/api/v1/user", userRoute);

/**
 * ---------------------------
 *  !    Playgrounds
 * ----------------------------
 */

/**
 * ---------------------------
 *  !    Root Route
 * ----------------------------
 */

export default app;
