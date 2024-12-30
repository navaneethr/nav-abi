// src/components/Home.jsx
import React, {useState} from "react";

const About = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <h1>About Page</h1>
      <input 
        placeholder="Enter Text..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <h2>{text}</h2>
    </div>
  );
};

export default About;