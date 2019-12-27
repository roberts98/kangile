import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { createTask } from '../../../actions/boards';
import Input from '../../forms/Input';
import { Button } from '../teams/TeamsContainer';

const InputGroup = styled.div`
  margin-bottom: 13px;
`;

function NewTaskForm({ boardId, handleModalClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [tags, setTags] = useState([]);
  const [asignee, setAsignee] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.user.username);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      description,
      author: 'x',
      asignee
    };

    dispatch(createTask(boardId, data));
    handleModalClose();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            placeholder="Task name"
            onChange={value => setName(value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Description"
            onChange={value => setDescription(value)}
          />
        </InputGroup>
        <InputGroup>
          <Input disabled type="text" placeholder={username} />
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Asignee"
            onChange={value => setAsignee(value)}
          />
        </InputGroup>
        <Button type="submit">Create!</Button>
      </form>
    </div>
  );
}

export default NewTaskForm;
