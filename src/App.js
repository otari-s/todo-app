import { useState } from "react";
import "./App.css";
import { Backlog } from "./components/Backlog";
import { Done } from "./components/Done";
import { InProgress } from "./components/InProgress";

function App() {
  // todo list setter
  const [todos, setTodos] = useState({
    backlog: [],
    inProgress: [],
    done: [],
  });

  return (
    <div className="app">
      <Backlog
        backlog={todos.backlog}
        setTodos={setTodos}
        quantity={todos.backlog.length}
      />
      <InProgress
        inProgress={todos.inProgress}
        setTodos={setTodos}
        quantity={todos.inProgress.length}
      />
      <Done
        done={todos.done}
        setTodos={setTodos}
        quantity={todos.done.length}
      />
    </div>
  );
}

export default App;
