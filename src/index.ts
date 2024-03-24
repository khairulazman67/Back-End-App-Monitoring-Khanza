import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const APP_HOST = process.env.HOST ?? 3000;

app.listen(APP_HOST, async () => {
  console.log("server dimulai");
});
