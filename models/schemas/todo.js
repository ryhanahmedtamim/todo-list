import { Schema } from "mongoose";


export const TodoSchema = new Schema({
  name: { type: String, default: 'taks' },
  userId: { type: String, require: true },
  details: { type: String},
  date: { type: Date, default: Date.now }
}, {
  timestamps: true
}
);