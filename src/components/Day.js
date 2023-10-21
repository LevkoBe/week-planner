import Task from "./Task";

let Day = ({ name, tasks }) => {
  return (
    <>
      <p>
        {"Day: "}
        {name}
      </p>
      <div className="tasks-div">
        {tasks.map((task) => (
          <Task key={task.title} title={task.title} description={task.description} startTime={task.startTime} endTime={task.endTime}></Task>
        ))}
      </div>
    </>
  );
};

export default Day;
