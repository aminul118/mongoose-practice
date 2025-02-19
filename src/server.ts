import app from "./app";
import dbConnect from "./config/dbConnect";

const port: number = Number(process.env.PORT) || 5000;

const serverStart = async () => {
  try {
    await dbConnect();
    app.listen(port, () => {
      console.log(`🔰 Server is running on${port}`);
    });
  } catch (error) {
    console.log(`⚠️ DB connection error ${error}`);
  }
};

serverStart();
