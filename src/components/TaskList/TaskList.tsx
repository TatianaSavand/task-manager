import TaskItem from "../TaskItem/TaskItem.tsx";
import {Task} from "../../types/task.ts";

interface TaskListProps {
  tasks: Task[];
  onRemove: (id: Task['id']) => void;
}

function TaskList({tasks, onRemove}: TaskListProps) {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onRemove={onRemove}/>
      ))}
    </div>
  )
}

export default TaskList;