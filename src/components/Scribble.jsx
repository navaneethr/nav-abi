// src/components/Home.jsx
import React, { useState } from "react";
import Searchbar from "./Searchbar";

const Scribble = () => {
  let [isTextField, setIsTextField] = useState(false);
  let [value, setValue] = useState("");
  let [savedValue, setSavedValue] = useState("");
  let [ results, setResults ] = useState([]);
  let [ foodResults, setFoodResults ] = useState([]);



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

  const foodList = [
    "Biryani",
    "Mandi",
    "Pizza",
    "Ice Cream",
    "Noodles"
  ];

  const countryData = [
    "Afghanistan",
    "United States of America",
    "Andorra",
    "Antartica",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Bahrain",
    "Bangladesh",
    "Belarus",
    "Belgium",
    "Bermuda",
    "Italy",
    "India",
    "Indonesia",
    "Thailand",
    "Ireland",
    "United Kingdom",
    "United Arab Emirates",
    "Netherlands",
    "Nicaragua",
    "Norway",
    "Dominican Republic",
    "Denmark",
    "Vantanu",
    "Vietnam",
    "Mexico",
    "Morocco",
    "Spain",
    "Sweden",
];

  return (
    <div>
      <h1>Scribble Pad</h1>
      {
        isTextField ? <input value={value} onChange={(e) => setValue(e.target.value)}/> : <div className="textClass" onClick={() => changeToTextField(true)}>{value}</div>
      }
      <button onClick={onSave}>{isTextField ? "Save" : "Edit"}</button>
      <button onClick={onCancel}>Cancel</button>
      <div style={{marginTop: "10px"}}>
        <Searchbar 
          options={countryData} 
          label="Search Country"
          results={results}
          setResults={setResults}
        />
        <Searchbar 
          options={foodList} 
          label="Search Food"
          results={foodResults}
          setResults={setFoodResults}
        />
      </div>
    </div>
    
  );
};

export default Scribble;
