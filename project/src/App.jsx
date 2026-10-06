import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addTask() {
    if (task === "") return;

    if (editIndex !== null) {
      const newTasks = [...tasks];
      newTasks[editIndex] = task;

      setTasks(newTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  }

  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    setTasks(newTasks);
  }

  function editTask(index) {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  return (
    <div className="container">
      <div className="todo-box">
        <h1>To-Do List</h1>

        <div className="input-section">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
          />

          <button className="add-btn" onClick={addTask}>
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              <span>{item}</span>

              <div className="buttons">
                <button
                  className="edit-btn"
                  onClick={() => editTask(index)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;