import { TodoItem } from "../models/todoItemModels.js";
import { validationResult } from "express-validator";

export const addTodoItem = async (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    const errorResponse = {
      status: "failed",
      message: errors.array()[0]["msg"],
    };
    res.status(417).send(errorResponse);
  }

  try {
    const requstBody = req.body;
    const todoItem = new TodoItem(requstBody);
    const response = await todoItem.save();
    res.status(201).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getTodoItem = async (request, response) => {
  const id = request.params.id;
  const todoItem = await TodoItem.findById(id);
  response.send(todoItem);
};

export const getAllTodoItem = async (request, response) => {
  const responseList = await TodoItem.find();
  response.send(responseList);
};

export const updatTodoItem = async (request, response) => {
  const itemId = request.params.id;
  const todoItem = await TodoItem.findByIdAndUpdate(itemId, request.body, {
    new: "ture",
  });
  response.send(todoItem);
};
