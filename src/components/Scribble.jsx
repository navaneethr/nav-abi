// src/components/Home.jsx
import React, { useState } from "react";

const Scribble = () => {
  let [isTextField, setIsTextField] = useState(false);
  let [value, setValue] = useState("");
  let [savedValue, setSavedValue] = useState("");


  const changeToTextField = (bool) => {
    setIsTextField(bool)
  }

  const onSave = () => {
    changeToTextField(!isTextField)
    setSavedValue(value)
  };

  const onCancel = () => {
    setValue(savedValue);
    changeToTextField(false);
  }

  return (
    <div>
      <h1>Scribble Pad</h1>
      {
        isTextField ? <input value={value} onChange={(e) => setValue(e.target.value)}/> : <div className="textClass" onClick={() => changeToTextField(true)}>{value}</div>
      }
      <button onClick={onSave}>{isTextField ? "Save" : "Edit"}</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
    
  );
};

export default Scribble;
