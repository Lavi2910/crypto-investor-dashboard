import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 5001;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));