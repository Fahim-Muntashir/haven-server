import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const GetAllAdmin = async () => {
    const result = await prisma.admin.findMany();
return result
};

export const AdminServices = {
    GetAllAdmin
}