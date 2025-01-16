// src/components/NoteTaker.jsx 

import React, { useState } from "react"
import styles from '../styles/noteTaker.module.css';

const NoteTaker = () => {
    let [notes, setNotes] = useState([]);
    let [inputTitle, setInputTitle] = useState("");
    let [inputNote, setInputNote] = useState("");

    const actionHandler = (e) => {
        e.preventDefault();

        if((inputTitle.trim() && (inputNote.trim())) !== ""){
            setNotes([...notes, inputTitle, inputNote]);
            setInputTitle("");
            setInputNote("");
        }
        console.log(notes);
    }

    const deleteNoteAction = (index) => {
        const newNotes = notes.filter((note, noteIndex) => noteIndex != index);
        setNotes(newNotes);
        setInputTitle("");
        setInputNote("");
    }

    return (
        <div>
            <h1 id={styles.pageTitle}>Basic NoteTaker</h1>
            <div>
                <dialog open className={styles.mainCont} >
                    <label >Title</label><br/>
                    <input 
                        className={styles.titleInput}
                        type="text" 
                        placeholder="Enter Title ... " 
                        value={inputTitle} 
                        onChange={(e) => {setInputTitle(e.target.value);}}
                        />
                    <br/><br/>
                    <label>Description</label><br/>
                    <input 
                        className={styles.descriptionInput}
                        type="text" 
                        placeholder="Enter Note ... " 
                        value={inputNote} 
                        onChange={(e) => {setInputNote(e.target.value);}}
                        />
                    <button className={styles.addBtn} type="button" onClick={ actionHandler }>Add Note</button>
                </dialog>
            </div>
            <div>
                <ul id={styles.noteList}>
                    {notes.map((note, index) => {
                        <li key={ index }>
                        { note }
                        <button onClick={() => deleteNoteAction(index)}>Delete</button>
                    </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default NoteTaker;