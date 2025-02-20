import {Task} from "../../types/task.ts";

interface TaskProps {
  task: Task,
  onRemove: (id: Task['id']) => void,
}

function TaskItem({task, onRemove}: TaskProps) {
  return (
    <div>
      <h3>{task.title}</h3>
      <button onClick={() => onRemove(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;