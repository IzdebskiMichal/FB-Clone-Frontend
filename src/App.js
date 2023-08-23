import { React, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Header/Navbar";
import Home from "./pages/home";
import Games from "./pages/games";
import Media from "./pages/media";
import Groups from "./pages/groups";
import Friends from "./pages/friends";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <Router>
      <NavBar inputHandler={inputHandler} />
      <Routes>
        <Route path="/" element={<Home input={inputText} />} />
        <Route path="/games" element={<Games />} />
        <Route path="/media" element={<Media />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </Router>
  );
}
export default App;
