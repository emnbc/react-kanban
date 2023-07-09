import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const TaskContext = createContext(null);

const getLocalStorageData = () => {
  const data = localStorage.getItem("kanban-tasks");
  return data ? JSON.parse(data) : [];
}

const setLocalStorageData = (newData) => {
  const data = JSON.stringify(newData);
  localStorage.setItem("kanban-tasks", data);
}

export const TaskProvider = (props) => {
  const [taskList, setTaskList] = useState(getLocalStorageData());

  const updateData = (data) => {
    setLocalStorageData(data);
    setTaskList(data);
  }

  const getLastId = () => {
    const sortedList = [...taskList].sort((a, b) => a.id - b.id);
    return sortedList.length ? sortedList[sortedList.length - 1].id : 0;
  };

  const addNewTask = (title) => {
    const task = {
      id: getLastId() + 1,
      title,
      details: "",
      status: "backlog",
    };

    updateData([...taskList, task]);
  };

  const changeTaskStatus = (id, status) => {
    let changedTask;
    const newList = taskList.filter((task) => {
      if (task.id === id) {
        changedTask = { ...task, status };
        return false;
      } else {
        return true;
      }
    });

    updateData([...newList, changedTask]);
  };

  const updateTaskDetails = (id, details) => {
    const updatedList = taskList.map(task => {
      return task.id === id ? {...task, details} : task;
    });

    updateData(updatedList);
  }

  const getTaskById = (taskId) => {
    return taskList.find(task => task.id === taskId);
  }

  const getTaskByStatus = (status) => {
    return taskList.filter(task => task.status === status);
  }

  const getTaskList = () => {
    return taskList;
  };

  const value = {
    getTaskList,
    addNewTask,
    changeTaskStatus,
    getTaskById,
    updateTaskDetails,
    getTaskByStatus,
  };

  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
