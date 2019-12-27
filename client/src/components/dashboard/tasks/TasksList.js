import React from 'react';

import Task from './Task';

function TasksList({ tasks, boardId }) {
  return tasks.map(task => (
    <Task boardId={boardId} key={task._id} task={task} />
  ));
}

export default TasksList;
