import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Todolist from "./pages/todolist";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/todos" element={ <Todolist/> }/>
      </Routes>
    </Router>
  );
};

export default App;
