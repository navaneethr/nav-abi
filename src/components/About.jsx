// src/components/Home.jsx
import React, {useState} from "react";

const About = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);


  // This called when you type, and we use this set value to the text variable declared above
  const onTextChange = (e) => {
    setText(e.target.value)
  }

  // This is called when you click on the below button
  const onIncremenetClicked = () => {
    setCount(count + 1);
  }

  const characters = [
    { char: 'A'},
    { char: 'B'},
    { char: 'C'},
  ];

  return (
    <div>
      <h1>About Page</h1>
      <input 
        placeholder="Enter Text..." 
        value={text} 
        onChange={onTextChange}
      />
      <h2>{text}</h2>
      <button onClick={onIncremenetClicked}>Increment</button>
      <h2>{count}</h2>
      <div>
        {
          characters.map((obj) => {
            return (
              <div>{obj.char}</div>
            )
          })
        }
      </div>
    </div>
  );
};

export default About;