import React, { useState } from "react";
import classNames from "classnames/bind";
import Task from "./components/Task";

import "./ToDoList.scss";
import Dictaphone from "./components/Dictaphone";

const ToDoList = () => {
  let todosData = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(todosData);

  //Обработка value инпута
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  //Оброботка сабмита
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };


  //Добавление таска
  const addTodo = (text) => {
    todos !== null
      ? localStorage.setItem("todos", JSON.stringify([...todos, text]))
      : localStorage.setItem("todos", JSON.stringify([]));
    todos !== null
      ? setTodos(JSON.parse(localStorage.getItem("todos")))
      : setTodos([]);
  };

  //Удаление таска
  const deleteTodo = (index) => {
    const newTodos = todos.filter((task, i) => i !== index);
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  //Удаление всех тасков
  const clearTodo = () => {
    localStorage.clear();
    setTodos([]);
    setValue("");
  };

  //Сборка тасков
  const taskElement =
    todos !== null
      ? todos.map((task, i) => (
          <Task task={task} key={i} delete={deleteTodo} index={i} />
        ))
      : [];

  //Скрытие кнопки удаления всех тасков, если тасков нет
  let clearClass = {
    todo__clear_hidden: !todos.length,
  };

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
            <Dictaphone setValue={setValue} handleSubmit={handleSubmit}/>
        </form>

        <ul className="todo__tasks">{taskElement}</ul>
        <button
          className={classNames("todo__clear", clearClass)}
          type="button"
          onClick={clearTodo}
        >
          Clear all
        </button>

      </div>
    </section>
  );
};

export default ToDoList;
