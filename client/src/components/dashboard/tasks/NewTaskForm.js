import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTask } from '../../../actions/boards';

function NewTaskForm({ boardId }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [tags, setTags] = useState([]);
  const [author, setAuthor] = useState('');
  const [asignee, setAsignee] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      description,
      author,
      asignee
    };

    dispatch(createTask(boardId, data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task name"
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={e => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        onChange={e => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Asignee"
        onChange={e => setAsignee(e.target.value)}
      />
      <button type="submit">Create!</button>
    </form>
  );
}

export default NewTaskForm;
