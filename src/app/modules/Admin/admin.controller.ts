import { Request, Response } from "express";
import { AdminServices } from "./admin.service";

const GetAllAdmin = async (req: Request, res: Response) => {
    try
    {
        const result = await AdminServices.GetAllAdmin();
  
        res.status(200).json({
            success: "true",
            message: "All Admin Get  Successfully",
            data:result,
    })
    } catch (err: any)
    {
        res.status(500).json({
            success: false,
            message: err?.name ||"something went wrong",
            error:err
        })
    }
}

export const AdminController = {
    GetAllAdmin
}