import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";
import "./styles.css";

const task = {
  id: 0,
  title: "Nova Tarefa",
  state: "pendente"
};

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((t) => t.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title={`Pendente`}
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          taskState={"Pendente"}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={`Fazendo`}
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          taskState={"Fazendo"}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={`Completa`}
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Completa")}
          taskState={"Completa"}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
