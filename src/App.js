import React from "react";
import "./style.css";
import Todo from "./components/Todo"


function App() {
  return (
    <div>
      <h1>My TODOS</h1>
      <Todo text="Learn React"/>
      <Todo text="Master React"/>
      <Todo text="Explore the full react course" />
     
    </div>
  );
}
export default App;
