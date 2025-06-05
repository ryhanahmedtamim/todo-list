import express, { request, response } from "express";
import { todoRouter } from "./route/todo.js";
import { connectDB } from "./db/connection.js";

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

app.use("/todos", todoRouter);
