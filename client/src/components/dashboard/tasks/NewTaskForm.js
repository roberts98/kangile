import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { createTask } from '../../../actions/boards';
import { Button, Input } from '../../forms';

import Datepicker from './Datepicker';
import Autocomplete from './Autocomplete';

const InputGroup = styled.div`
  margin-bottom: 13px;
`;

function NewTaskForm({ boardId, handleModalClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // const [attachments, setAttachments] = useState([]);
  const [tags, setTags] = useState('');
  const [asignee, setAsignee] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.user.username);
  const { members } = useSelector(state => state.teams.activeTeam);

  function handleSubmit(e) {
    e.preventDefault();
    const splittedTags = tags.split(', ');
    const data = {
      name,
      description,
      author: username,
      deadline,
      asignee,
      tags: splittedTags
    };

    dispatch(createTask(boardId, data));
    handleModalClose();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            required
            type="text"
            placeholder="Task name"
            onChange={value => setName(value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            required
            type="text"
            placeholder="Description"
            onChange={value => setDescription(value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Tags (split by ,)"
            onChange={value => setTags(value)}
          />
        </InputGroup>
        <InputGroup>
          <Input required disabled type="text" placeholder={username} />
        </InputGroup>
        <InputGroup>
          <Autocomplete
            value={asignee}
            handleChange={setAsignee}
            values={members}
          />
        </InputGroup>
        <InputGroup>
          <Datepicker value={deadline} handleChange={setDeadline} />
        </InputGroup>
        <Button type="submit">Create!</Button>
      </form>
    </div>
  );
}

export default NewTaskForm;
