import { Router } from "express";
import { allTodos, createTodo, deleteTodo } from "../services/todo.service.js";

const router = Router();
const todos = [];

router.get("/todo", (req, res) => {
  allTodos((todo) => {
    res.render("todo", { todo });
  });
});

router.get("/todo", (req, res) => {
  res.render("todo");
});

router.post("/todo/add", (req, res) => {
  const { todo } = req.body;
  createTodo(todo);
  res.redirect("/todo");
});

router.get("/todo/delete/:id", (req, res) => {
    deleteTodo(req.params.id)
    res.redirect("/todo")
})

export default router;
