// src/components/Home.jsx
import React, { useState } from "react";

const Scribble = () => {
  let [str1, setStr1] = useState("");
  let [str2, setStr2] = useState("");
  let [concatStr, setConcatStr] = useState("");
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [result, setResult ] = useState(0);

  return (
    <div>
      <h1>Scribble Pad</h1>
      <input value={str1} onChange={(e) => { setStr1(e.target.value); }} placeholder="String A"/>
      <input value={str2} onChange={(e) => { setStr2(e.target.value); }}placeholder="String B"/>
      <button onClick={ (e) => { setConcatStr( str1 + str2) }}>Concat</button><br/><br/>
      { concatStr }
      <br/><br/>
      <hr/>
      <br/>
      <h2>Calculator</h2>
      <input value={num1} type="number" onChange={(e) => { setNum1(e.target.value); }} placeholder="Num A"/>
      <input value={num2} type="number" onChange={(e) => { setNum2(e.target.value); }}placeholder="Num B"/>
      <button onClick={ (e) => { setResult( parseInt(num1) + parseInt(num2)) }}>ADD</button><br/><br/>
      { result }
      <br/><br/>
      
    </div>
    
  );
};

export default Scribble;
