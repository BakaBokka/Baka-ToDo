import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import deleteIcon from "../../images/hippo-footprints.png";
import "./Task.scss";

const Task = ({ id, task, index, moveTaskHandler, deleteTodo }) => {

//Drag and drop(скопирован из библиотеки почти без изменений)
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "task",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveTaskHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { index, id, task, type: "task" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 1 : 1;

  drag(drop(ref));

  //Удаление таска
  const deleteTask = () => {
    deleteTodo(index);
  };

  return (
    <li className="todo__task" ref={ref} style={{ opacity }}>
      <p className="todo__task-text">{task}</p>
      <img
        className="todo__deleteIcon"
        src={deleteIcon}
        alt="deleteIcon"
        onClick={deleteTask}
      />
    </li>
  );
};

export default Task;
