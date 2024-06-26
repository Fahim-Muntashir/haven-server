import { Request, Response } from "express";
import { UserService } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {

    try
    {
        const result = await UserService.createAdmin(req.body);
  
        res.send(result);
        res.status(200).json({
            success: "true",
            message: "Admin Created Successfully",
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

export const userController = {
    createAdmin,
}

