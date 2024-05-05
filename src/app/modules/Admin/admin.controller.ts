import { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import pick from "../../../shared/Pick";
import { adminFilterableFields } from "./admin.constant";



const GetAllAdmin = async (req: Request, res: Response) => {
    try {
        const filters = pick(req.query, adminFilterableFields);
        
        const options=pick(req.query,['limit','page'])

        const result = await AdminServices.GetAllAdmin(filters,options);
  
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