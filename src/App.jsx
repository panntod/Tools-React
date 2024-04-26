import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Todolist from "./pages/todolist";
import NotFound from "./pages/notFound";
import Note from "./pages/note";
import Expense from "./pages/expense";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todolist />} />
        <Route path="/notes" element={<Note />} />
        <Route path="/expenses" element={<Expense />} />

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
