import "./TaskPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTasks } from "../../providers/task-provider";

export const TaskPage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const navigate = useNavigate();
  const { taskId } = useParams();
  const { getTaskById, updateTaskDetails } = useTasks();

  const task = getTaskById(+taskId);

  const editDetails = () => {
    setEditText(task.details);
    setIsEdit(true);
  };

  const saveDetails = () => {
    updateTaskDetails(task.id, editText);
    setEditText("");
    setIsEdit(false);
  };

  return (
    <div className="task-page">
      <h2 className="task-page__title">
        {task.title}
        <div className="task-page__close-btn" onClick={() => navigate(-1)}>
          <img src="/img/cross.svg" alt="close" />
        </div>
      </h2>
      <div className="task-page__details">
        {isEdit ? (
          <textarea
            className="task-page__details-form"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <div className="task-page__details-text">
            {!!task.details ? (
              task.details
            ) : (
              <em>This task has no description</em>
            )}
          </div>
        )}
      </div>
      <div className="task-page__actions">
        {isEdit ? (
          <button className="form-btn" onClick={() => saveDetails()}>
            Submit
          </button>
        ) : (
          <button className="form-btn" onClick={() => editDetails()}>
            Edit Details
          </button>
        )}
      </div>
    </div>
  );
};
