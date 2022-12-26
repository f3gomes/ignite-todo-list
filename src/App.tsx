import "./App.css";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <TaskInput />

      <div className="main">
        <TaskList />
      </div>
    </>
  );
}

export default App;
