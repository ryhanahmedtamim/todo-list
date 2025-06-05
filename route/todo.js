import { Router } from "express";
import {
  addTodoItem,
  getTodoItem,
  updatTodoItem,
  getAllTodoItem,
} from "../controller/todoController.js";
import { check } from "express-validator";

export const todoRouter = Router();

todoRouter.post(
  "/",
  [
    check("name").notEmpty().withMessage("name cannot be empty"),
    check("details").notEmpty().withMessage("task details cannot be empty"),
  ],
  addTodoItem
);

todoRouter.get("/:id", getTodoItem);
todoRouter.put(":id", updatTodoItem);
todoRouter.get("/", getAllTodoItem);
