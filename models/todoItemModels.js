import mongoose from "mongoose";
import { TodoSchema } from "./schemas/todo.js";

export const TodoItem = mongoose.model("todo_item", TodoSchema);