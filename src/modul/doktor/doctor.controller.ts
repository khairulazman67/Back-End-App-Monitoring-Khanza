import { NextFunction, Request, Response } from "express";
import { getAllDoctor } from "./doctor.repository";
import { success } from "../../utils/response_formatter";

export const getDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dokter = await getAllDoctor();
    res.send(success(dokter));
  } catch (error) {
    next(error);
  }
};
