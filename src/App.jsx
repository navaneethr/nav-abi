// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

const App = () => {
  console.log('-----> Theme', defaultTheme)
  return (
    <Provider theme={defaultTheme} locale="en-US" colorScheme="light">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
