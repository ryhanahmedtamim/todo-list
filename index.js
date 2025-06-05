import express, { request, response } from "express";
import {
  addTodoItem,
  getTodoItem,
  updatTodoItem,
  getAllTodoItem,
} from "./controller/todoController.js";
import { connectDB } from "./db/connection.js";
import { check } from "express-validator";

const app = new express();
app.use(express.json());
app.listen(3000);

connectDB();
app.get("/", (request, response) => {
  const serviceStatus = {
    status: "running",
  };
  response.send(serviceStatus);
});

app.post(
  "/todos",
  [
    check("name").notEmpty().withMessage("name cannot be empty"),
    check("details").notEmpty().withMessage("task details cannot be empty"),
  ],
  addTodoItem
);
app.get("/todos/:id", getTodoItem);
app.put("/todos/:id", updatTodoItem);
app.get("/todos", getAllTodoItem);
