import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  preferences: {
    assets: string[];
    investorType: string;
    contentTypes: string[];
  };
  onboarded: boolean;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  preferences: {
    assets: { type: [String], default: [] },
    investorType: { type: String, default: "" },
    contentTypes: { type: [String], default: [] },
  },
  onboarded: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUser>("User", userSchema);