import React, { useState } from "react";
import Task from "./components/Task";
import "./ToDoList.scss";

const ToDoList = () => {
  let todosData = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(todosData);
  console.log(todos);
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text) => {
    todos !== null
      ? localStorage.setItem("todos", JSON.stringify([...todos, text]))
      : localStorage.setItem("todos", JSON.stringify([]));
    todos !== null
      ? setTodos(JSON.parse(localStorage.getItem("todos")))
      : setTodos([]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((task, i) => i !== index);
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  let taskElement = todos !== null ? todos.map((task, i) => (
    <Task task={task} key={i} delete={deleteTodo} index={i} />
  )) : [];

  return (
    <section className="todo">
      <div className="todo__content">
        <h1 className="todo__title">Baka ToDos</h1>
        <form className="todo__form" onSubmit={handleSubmit}>
          <input
            className="todo__input"
            type="text"
            autoFocus
            value={value}
            placeholder="What's my task?"
            onChange={handleChange}
            required
          />
        </form>

        <ul className="todo__tasks">{taskElement}</ul>
      </div>
    </section>
  );
};

export default ToDoList;
