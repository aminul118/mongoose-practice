import express, { Application, Request, Response } from "express";
import cors from "cors";
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
