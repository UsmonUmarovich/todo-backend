import Datastore from "nedb";

const todos = new Datastore({ filename: "./data/todos.json" });
todos.loadDatabase((err) => console.log(err));

export function allTodos(callback) {
  todos.find({}, (err, todo) => {
    callback(todo);
  });
}

export function createTodo(todo) {
  const doc = {
    todo,
  };
  if (!todo.trim()) {
    return;
  } else {
    todos.insert(doc, (err, newDoc) => {
      console.log(err);
    });
  }
}

export function deleteTodo(id) {
    todos.remove({ _id: id })
}