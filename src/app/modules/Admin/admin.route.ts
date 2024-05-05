import express from 'express';
import { AdminController } from './admin.controller';

const router = express.Router();


router.get('/', AdminController.GetAllAdmin)


export const AdminRoutes= router;