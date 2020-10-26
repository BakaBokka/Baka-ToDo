import React, { useState } from "react";
import Task from "./components/Task";
import "./ToDoList.scss";

const ToDoList = () => {
  const todosData = JSON.parse(localStorage.getItem("todos"));
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(todosData);
console.log(localStorage)
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text) => {
    localStorage.setItem("todos", JSON.stringify([...todos, text]));

    todos !== null ?  setTodos(JSON.parse(localStorage.getItem("todos"))) :  setTodos([]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((task, i) => i !== index);
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setTodos(JSON.parse(localStorage.getItem("todos")));
  };


  let taskElement;

  if( todos !== null) {
    taskElement = todos.map((task, i) => (
    <Task task={task} key={i} delete={deleteTodo} index={i} />
  ));
  } else taskElement = [];

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
            // minLength="1"
          />
        </form>

        <ul className="todo__tasks">{taskElement}</ul>
      </div>
    </section>
  );
};

export default ToDoList;
