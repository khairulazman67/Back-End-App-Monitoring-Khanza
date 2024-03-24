import express from "express";
// import { errorResponse } from "./utils/response_formatter";
import doktorRoute from "./modul/doktor/doctor.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", doktorRoute);

// app.use(errorResponse);

export default app;
