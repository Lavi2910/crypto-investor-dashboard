import { Router } from "express";
import { getNews, getPrices } from "../controllers/dashboardController";
import { requireAuth } from "../middleware/auth";
import { castVote } from "../controllers/dashboardController";
import { getVotes } from "../controllers/dashboardController";
import { getMeme } from "../controllers/dashboardController";

const router = Router()

router.get("/prices", requireAuth, getPrices)
router.post("/vote", requireAuth, castVote);
router.get("/votes", requireAuth, getVotes);
router.get("/news", requireAuth, getNews)
router.get("/meme", requireAuth, getMeme);

export default router