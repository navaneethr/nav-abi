// src/components/BasicCalculator.jsx

import React, { useState } from "react"

const BasicCalculator = () => {
    let [inputNum, setInputNum] = useState("");
    let [result, setResult ] = useState(0);
    
    const NumberDummy = (elem) => { return Number(elem) };

    let inputNumArr = inputNum.split(" ").map(NumberDummy);

    const add = () => {
        let sum = 0;
        inputNumArr.forEach(num => {
            sum = sum + num;
        });
        setResult(sum);
    }

    const subtract = () => {
        let sub = 0;
        inputNumArr.forEach((num, index) => {
            if(index === 0) {
                sub = num;
            } else {
                sub = sub - num;
            }
        });
        setResult(sub);
    }

    const multiply = () => {
        let product = 1;
        inputNumArr.forEach(num => {
            product = product * num;
        });
        setResult(product);
    }

    return (
        <div>
            <h1>Basic Calculator App Using React</h1>
            <br/>
            
            <label>Task Input *</label><br></br><br></br>
                <input placeholder="Enter numbers in sequence separated by spaces ..." value={inputNum} onChange={ (e) => { setInputNum(e.target.value)}}/>
                <br/><br/>
                <button className="btn variant-cta" type="submit" onClick={add}>+</button>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <button className="btn variant-cta" type="submit" onClick={subtract}>-</button>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <button className="btn variant-cta" type="submit" onClick={multiply}>x</button>
                <br/><br/>
                <label>Result = {result}</label>
            </div>
    );
};

export default BasicCalculator;