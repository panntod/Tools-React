import React from "react";
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Todolist from "./pages/todolist";
import NotFound from "./pages/notFound";
import Note from "./pages/note";
import Expense from "./pages/expense";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="*" element={ <NotFound/> } />
        <Route path="/" element={ <Home/> }/>
        <Route path="/todos" element={ <Todolist/> }/>
        <Route path="/notes" element={ <Note/> }/>
        <Route path="/expense" element={ <Expense/> }/>
      </Routes>
    </Router>
  );
};

export default App;
