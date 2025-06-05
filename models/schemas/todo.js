import { Schema } from "mongoose";

export const TodoSchema = new Schema(
  {
    name: { type: String, default: "taks" },
    userId: { type: String, required: [true, "userId cannot be empty"] },
    details: { type: String, required: [true, "details cannot be emplty"] },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);
