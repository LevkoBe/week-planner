let currentDate = new Date();

const generateTasks = () => {
  const tasks = [];

  tasks.push({
    title: "Get Acquainted with Task Planner Interface",
    description: "Explore and learn how to use the task planner interface.",
    startTime: "21:00",
    endTime: "21:15",
    day: currentDate.toDateString(),
  });

  currentDate.setDate(currentDate.getDate() + 1);

  for (let i = 0; i < 30; i++) {
    tasks.push({
      title: "Planning",
      description: "Add a description for your planning task.",
      startTime: "21:00",
      endTime: "21:15",
      day: currentDate.toDateString(),
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return tasks;
};

const mockTasks = generateTasks();

export default mockTasks;
