import Task from "./TaskClass";

let currentDate = new Date();

const generateTasks = () => {
  const tasks = [];
  tasks.push(new Task("Get Acquainted with Task Planner Interface", "Explore and learn how to use the task planner interface.", currentDate.toDateString(), "21:00", "21:15"));

  currentDate.setDate(currentDate.getDate() + 1);

  for (let i = 0; i < 30; i++) {
    tasks.push(new Task("Planning", "Add a description for your planning task.", currentDate.toDateString(), "21:00", "21:15"));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return tasks;
};

const mockTasks = generateTasks();

export default mockTasks;
