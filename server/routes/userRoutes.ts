import { Router } from "express";
import { getMe, updatePreferences } from "../controllers/userController";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.get("/", requireAuth, getMe);
router.patch("/preferences", requireAuth, updatePreferences);

export default router;