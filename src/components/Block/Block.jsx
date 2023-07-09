import "./Block.scss";
import { Task } from "../Task/Task";
import { useTasks } from "../../providers/task-provider";
import { TaskForm } from "../TaskForm/TaskForm";

export const Block = (props) => {
  const tasks = useTasks();

  const getTasksByStatus = (status) => {
    return tasks.getTaskList().filter((task) => task.status === status);
  };

  const blockTasks = getTasksByStatus(props.status);

  return (
    <div className="block">
      <div className="block__header">{props.name}</div>
      <div className="block__list">
        {blockTasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
      <div className="block__footer">
        <TaskForm {...props} />
      </div>
    </div>
  );
};
