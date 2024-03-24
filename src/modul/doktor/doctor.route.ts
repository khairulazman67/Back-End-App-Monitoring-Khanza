import { Router } from "express";
import { getDoctor } from "./doctor.controller";

const doktorRouter = Router();

doktorRouter.get("/doctor", getDoctor);

export default doktorRouter;
