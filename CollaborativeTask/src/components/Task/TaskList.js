import React from 'react';

function TaskList({ tasks }) {
  
  const taskItems = tasks.map((task) => (
    <div key={task.id}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {}
    </div>
  ));

  return (
    <div>
      <h2>Task List</h2>
      {taskItems}
    </div>
  );
}

export default TaskList;
