import { React, useState } from "react";
import "./App.css";
import NavBar from "./components/Header/Navbar";
import List from "./components/List";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
      <NavBar inputHandler={inputHandler} />
      <List input={inputText} />
    </>
  );
}
export default App;
