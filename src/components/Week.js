import tasks from "../stubs/tasks";
import Day from "./Day";

let Week = () => {
  let days = [
    { day: "Monday", tasks: [tasks[0], tasks[1]] },
    { day: "Tuesday", tasks: [tasks[2], tasks[3]] },
    { day: "Wednesday", tasks: [tasks[4], tasks[5]] },
    { day: "Thursday", tasks: [tasks[1], tasks[4]] },
    { day: "Friday", tasks: [tasks[2], tasks[3]] },
    { day: "Saturday", tasks: [tasks[1], tasks[4], tasks[5]] },
    { day: "Sunday", tasks: [tasks[0], tasks[1], tasks[2], tasks[3], tasks[4], tasks[5]] },
  ];
  return (
    <>
      {days.map((day) => (
        <Day key={day.day} name={day.day} tasks={day.tasks}></Day>
      ))}
    </>
  );
};

export default Week;
