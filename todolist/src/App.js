import { useState } from "react";
import "./App.scss";
import Home from "./Components/Home";

const mokup = [
  {
    name: "entrare sul drive",
    description: "accedere al drive e completare",
    time: "03/02/23 09:00 ",
    id: 1,
  },
  {
    name: "call con sara rossi",
    description: "accedere al drive e completare",
    time: "03/02/23 09:00 ",
    id: 2,
  },
  {
    name: "contattare aggenzia",
    description: "accedere al drive e completare",
    time: "03/02/23 09:00 ",
    id: 3,
  },
  {
    name: "contattare aggenzia",
    description: "accedere al drive e completare",
    time: "03/02/23 09:00 ",
    id: 4,
  },
];

function App() {
  const [todo, setTodo] = useState(mokup);
  return (
    <div className="App">
      <Home todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
