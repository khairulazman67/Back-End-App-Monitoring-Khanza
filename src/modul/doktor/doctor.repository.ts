import { prisma } from "../../utils/db";

export const getAllDoctor = async () => {
  try {
    return await prisma.dokter.findMany();
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
};
