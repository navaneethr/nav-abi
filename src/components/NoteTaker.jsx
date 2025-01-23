// src/components/NoteTaker.jsx 

import React, { useState } from "react"
import styles from '../styles/noteTaker.module.css';

const NoteTaker = () => {
    let [notes, setNotes] = useState([]);
    let [inputTitle, setInputTitle] = useState("");
    let [inputNote, setInputNote] = useState("");

    const actionHandler = (e) => {
        e.preventDefault();

        if(inputTitle.trim() !== "" && inputNote.trim() !== ""){
            setNotes([...notes, { title: inputTitle, desc: inputNote} ]);
            setInputTitle("");
            setInputNote("");
            console.log(notes);
        }
        
    }

    const deleteNoteAction = (index) => {
        const newNotes = notes.filter((note, noteIndex) => noteIndex !== index);
        setNotes(newNotes);
        setInputTitle("");
        setInputNote("");
    }

    return (
        <div>
            <h1 id={styles.pageTitle}>Basic NoteTaker</h1>
            <div>
                <div className={styles.mainCont} >
                    <label >Title</label>
                    <input 
                        className={styles.titleInput}
                        type="text" 
                        placeholder="Enter Title ... " 
                        value={inputTitle} 
                        onChange={(e) => {setInputTitle(e.target.value);}}
                        />
                    <label>Description</label>
                    <input 
                        className={styles.descriptionInput}
                        type="text" 
                        placeholder="Enter Note ... " 
                        value={inputNote} 
                        onChange={(e) => {setInputNote(e.target.value);}}
                        />
                    <button className={styles.addBtn} type="button" onClick={ actionHandler }>Add Note</button>
                </div>
            </div>
            <div >
                <dialog open={notes.length > 0} className={styles.notes}>
                    <h3>Notes</h3>
                    <ol id={styles.noteList}>
                    {notes.map((note, index) => (
                        <li key={index}>
                        <em>{note.title}</em> :  {note.desc}
                        <button className={styles.deleteBtn} onClick={() => deleteNoteAction(index)}>Delete</button>
                    </li>
                    ))}
                </ol>

                </dialog>
            </div>
        </div>
    );
};

export default NoteTaker;