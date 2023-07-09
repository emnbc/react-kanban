import { useTasks } from "../../providers/task-provider";
import "./Footer.scss";

export const Footer = () => {
  const tasks = useTasks();

  const activeTaskCounter = () => {
    return tasks.getTaskByStatus("backlog").length;
  }

  const finishedTaskCounter = () => {
    return tasks.getTaskByStatus("finished").length;
  }

  return (
    <div className="footer">
      <div className="footer__counters">
        <div>Active tasks: {activeTaskCounter()}</div>
        <div>Finished tasks: {finishedTaskCounter()}</div>
      </div>
      <div>
        Kanban board by Tupikov Evgeny, 2023
      </div>
    </div>
  );
};
