import { connect } from "mongoose";
import express, { request, response } from 'express';
import { addTodoItem, getTodoItem, updatTodoItem, getAllTodoItem } from "./controller/todoController.js";


const app = new express();
app.use(express.json());
app.listen(3000);

app.get("/", (request, response) => {
    const serviceStatus = {
        status : "running"
    };
    response.send(serviceStatus);
});

app.post("/todos", addTodoItem);
app.get("/todos/:id", getTodoItem);
app.put("/todos/:id", updatTodoItem);
app.get("/todos", getAllTodoItem);