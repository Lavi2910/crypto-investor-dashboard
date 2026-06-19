import mongoose, { Schema, Document } from "mongoose";

export interface IVote extends Document {
  userId: mongoose.Types.ObjectId;
  section: "news" | "prices" | "insight" | "meme";
  value: 1 | -1;
  createdAt: Date;
}

const voteSchema = new Schema<IVote>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  section: {
    type: String,
    enum: ["news", "prices", "insight", "meme"],
    required: true,
  },
  value: { type: Number, enum: [1, -1], required: true },
  createdAt: { type: Date, default: Date.now },
});

voteSchema.index({ userId: 1, section: 1 }, { unique: true });

export default mongoose.model<IVote>("Vote", voteSchema);
