import "./TaskForm.scss";
import { useState } from "react";
import { useTasks } from "../../providers/task-provider";

export const TaskForm = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [inputText, setInputText] = useState("");

  const tasks = useTasks();

  const addTask = (event) => {
    event.preventDefault();

    if (inputText) {
      tasks.addNewTask(inputText);
      setInputText("");
    }
    setIsActive(false);
  };

  const changeStatus = () => {
    if (selectedTask !== null) {
      tasks.changeTaskStatus(selectedTask, props.status);
      setSelectedTask(null);
    }
    setIsActive(false);
  };

  const getPreviousBlockList = () => {
    const previousId = props.id - 1;

    if (previousId > 0) {
      const previousStatus = props.blocks.find(
        (b) => b.id === previousId
      ).status;
      return tasks.getTaskList().filter((t) => t.status === previousStatus);
    } else {
      return [];
    }
  };

  const isAddBtnDisabled = () => {
    return !props.isNew && getPreviousBlockList().length === 0;
  };

  const newTask = (
    <form onSubmit={(e) => addTask(e)}>
      <input
        className="task-form__input form-input"
        type="text"
        onInput={(e) => setInputText(e.target.value)}
      />
      <button className="form-btn" type="submit">
        Submit
      </button>
    </form>
  );

  const newStatus = (
    <div>
      <select
        onChange={(e) => setSelectedTask(+e.target.value)}
        className="task-form__input form-input"
      >
        <option>-- select item --</option>
        {getPreviousBlockList().map((task) => (
          <option key={task.id} value={task.id}>
            {task.title}
          </option>
        ))}
      </select>
      <button className="form-btn" onClick={changeStatus} type="button">
        Submit
      </button>
    </div>
  );

  return (
    <div className="task-form">
      {isActive ? (
        props.isNew ? (
          newTask
        ) : (
          newStatus
        )
      ) : (
        <button
          disabled={isAddBtnDisabled()}
          className="task-form__add-btn"
          onClick={() => setIsActive(true)}
          type="button"
        >
          + Add card
        </button>
      )}
    </div>
  );
};
