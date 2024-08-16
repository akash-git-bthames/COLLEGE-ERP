import  {Router} from "express";
import adminAuthController  from "../controllers/adminController.js";

const router = Router();

router.post("/auth/create-admin", adminAuthController.createNewAdmin);

export default router;
