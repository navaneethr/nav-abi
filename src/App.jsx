// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import SideNavbar from "./components/SideNavbar";
import Home from "./components/Home/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import BasicTodo from "./components/BasicTodo";
import Scribble from "./components/Scribble";
import BasicCalculator from "./components/BasicCalculator";
import NoteTaker from "./components/NoteTaker";
import Searchbar from "./components/Searchbar";

const App = () => {
  return (
    <Provider theme={defaultTheme} locale="en-US" colorScheme="light">
      <Router>
        <div style={{ display: "flex" }}>
          <SideNavbar />
          <main style={{ flex: 1, padding: "1rem" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/basicTodo" element={<BasicTodo />} />
              <Route path="/about" element={<About />} />
              <Route path="/scribble" element={<Scribble />} />
              <Route path="/basicCalculator" element={<BasicCalculator />} />
              <Route path="/noteTaker" element={<NoteTaker />} />
              <Route path="/searchbar" element={<Searchbar />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
