import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db";
import authRoutes from "./routes/authRoutes";
import userRoutes from './routes/userRoutes'
import dashboardRoutes from './routes/dashboardRoutes'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/me", userRoutes)
app.use("/dashboard", dashboardRoutes)

app.get("/health", (req: Request, res: Response) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 5001;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));