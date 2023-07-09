import "./Task.scss";
import { useNavigate } from "react-router-dom";

export const Task = (props) => {
  const navigate = useNavigate();
  const openTask = (id) => navigate(`/tasks/${id}`);

  return (
    <div className="task" onClick={() => openTask(props.id)}>
      {props.title}
    </div>
  );
};
