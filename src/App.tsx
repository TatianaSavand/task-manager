import './App.scss'
import TaskForm from "./components/TaskForm/TaskForm.tsx";
import TaskList from './components/TaskList/TaskList.tsx';
import {useState} from "react";
import {Task} from "./types/task.ts";
import {createTask} from "./api/api.ts";

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function onCreate(title: string) {
    const task: Task = createTask(title);
    setTasks([...tasks, task]);
  }

  function onRemove(id: Task['id']) {
    const filteredTasks: Task[] = tasks.filter((task: Task): boolean => task.id !== id);
    setTasks(filteredTasks)
  }

  return (
    <div>
      <TaskForm onCreate={onCreate}></TaskForm>
      <TaskList tasks={tasks} onRemove={onRemove}></TaskList>
    </div>
  )
}

export default App

