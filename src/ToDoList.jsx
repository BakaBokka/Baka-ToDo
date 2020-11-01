import React, { useState, useCallback } from "react";
import classNames from "classnames/bind";
import Task from "./components/Task/Task";
import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./ToDoList.scss";
import Dictaphone from "./components/Dictaphone/Dictaphone";

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

  //Обработка перетаскивания таска
  const moveTaskHandler = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = todos[dragIndex];

      localStorage.setItem(
        "todos",
        JSON.stringify(
          update(todos, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragItem],
            ],
          })
        )
      );
      setTodos(JSON.parse(localStorage.getItem("todos")));
    },
    [todos]
  );

  //Генерация ключей для массива
  const generateKey = () => {
    let count = 0;
    return function () {
      return count++;
    };
  };

  let count = generateKey();

  //Сборка тасков
  const taskElement =
    todos !== null
      ? todos.map((task, i) => (
          <Task
            task={task}
            key={count()}
            deleteTodo={deleteTodo}
            index={i}
            id={count()}
            moveTaskHandler={moveTaskHandler}
          />
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
          <Dictaphone setValue={setValue} handleSubmit={handleSubmit} />
        </form>

        <ul className="todo__tasks">
          <DndProvider backend={HTML5Backend}>{taskElement}</DndProvider>
        </ul>

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
