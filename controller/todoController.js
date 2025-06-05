import { request, response } from "express";

export const addTodoItem = async (req, res) => {
    let response = {
        message: "success"
    };
    res.status(201).send(response);
};

export const getTodoItem = async (request, response) => {
    const id = request.params.id;
    let todoItem = {
        "id" : id,
        details : "test details",
        userId: "dljflajedlkj",
        date : new Date()
    };

    response.send(todoItem);
}

export const getAllTodoItem = async (request, response) => {
    let todoItems = []
    todoItems.push({});
    todoItems.push({});
    response.send(todoItems)
}

export const updatTodoItem = async (request, response) => {
    const itemId = request.params.id;
    // todo : add update code here
    let todoItem = {
        id : itemId,
        details : "test details",
        userId: "dljflajedlkj",
        date : new Date().toLocaleString()
    };
    response.send(todoItem);
}