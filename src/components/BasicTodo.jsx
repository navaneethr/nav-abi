// src/components/BasicTodo.jsx
import React, { useState } from "react";

const BasicTodo = () => {
    let [tasks,setTasks] = useState([]);
    let [inputValue, setInputValue] = useState("");

    const inputHandler = (e) => {
        setInputValue(e.target.value);
    }

    const actionHandler = (e) => {
        e.preventDefault();

        if(inputValue.trim() !== ""){
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
    }

    const deleteTaskAction = (index) => {
        const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
        setTasks(newTasks);
        setInputValue("");
    }


    return (
        <div>
        <h1>Basic Todo List</h1>
        <div>
            <form onSubmit={ actionHandler }>
                <label>Task Input *</label><br></br><br></br>
                <input type="text" placeholder="Enter Task ..." value={inputValue} onChange={inputHandler}/>
                
                <button className="btn variant-cta" type="submit">Add</button>
                
            </form>
        </div>
        <div>
            <ul aria-label="Task List" height="size-3000">
                {tasks.map((task, index) => (
                   <li key= { index }>
                        { task }
                        <button onClick={() => deleteTaskAction(index)}>Delete</button>
                   </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default BasicTodo;
