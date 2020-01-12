import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { createTask } from '../../../actions/boards';
import { Button, Input } from '../../styled/forms';
import { Datepicker, Autocomplete } from './';
import { SMALL_SPACING } from '../../../contants/styles';

const InputGroup = styled.div`
  margin-bottom: ${SMALL_SPACING};
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
            onChange={e => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            required
            type="text"
            placeholder="Description"
            onChange={e => setDescription(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Tags (split by ,)"
            onChange={e => setTags(e.target.value)}
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
        <Button wide type="submit">
          Create!
        </Button>
      </form>
    </div>
  );
}

export default NewTaskForm;
