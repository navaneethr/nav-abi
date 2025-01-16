// src/components/BasicTodo.jsx
import React, { useState } from "react";

const BasicTodo = () => {
    let [tasks,setTasks] = useState([]);
    let [inputValue, setInputValue] = useState("");
    let [editText, setEditText] = useState("");


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

    const editTaskAction = (index) => {
        // editText
        // let sim = [ "a", "b", "c"];
        // let r = "d"
        // sim[1] = r;
        // console.log(sim);
        let newTasks = tasks;

       newTasks = newTasks.map((e, i)=> { 
            if (i == index) {
                return editText;
            } 
            return e;
         } )

        setTasks(newTasks);
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
            <input type="text" placeholder="Edit Text ..." value={editText} onChange={(e) => setEditText(e.target.value)}/>
        </div>
        <div>
            <ul aria-label="Task List" height="size-3000">
                {tasks.map((task, index) => (
                   <li key= { index }>
                        { task }
                        <button onClick={() => editTaskAction(index)}>Edit</button>
                        <button onClick={() => deleteTaskAction(index)}>Delete</button>
                   </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default BasicTodo;
