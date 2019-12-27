import React from 'react';
import { useSelector } from 'react-redux';

import Task from './Task';

function TasksList({ tasks, boardId }) {
  const state = useSelector(state => state);
  console.log(state);
  return tasks.map(task => (
    <Task boardId={boardId} key={task._id} task={task} />
  ));
}

export default TasksList;
