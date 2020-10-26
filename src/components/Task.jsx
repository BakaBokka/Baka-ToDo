import React from "react";
import deleteIcon from "../images/hippo-footprints.png"
import "./Task.scss";



const Task = (props) => {

const deleteTask = () => {
props.delete(props.index)
}

  return (
    <li className="todo__task" >
     {props.task}
     <img className="todo__deleteIcon" src={deleteIcon} alt="deleteIcon" onClick={deleteTask}/>
    </li>
  );
};

export default Task;
