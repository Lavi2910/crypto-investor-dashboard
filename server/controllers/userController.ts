import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import User from "../models/User";

export async function getMe(req: AuthRequest, res: Response) {
  try {
    const user = await User.findById(req.userId).select("-passwordHash");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ user });
  } catch (err) {
    console.error("getMe error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function updatePreferences(req: AuthRequest, res: Response) {
  try {
    const { assets, investorType, contentTypes } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        preferences: { assets, investorType, contentTypes },
        onboarded: true,
      },
      { new: true, runValidators: true }
    ).select("-passwordHash");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ user });
  } catch (err) {
    console.error("updatePreferences error:", err);
    res.status(500).json({ message: "Server error" });
  }
}