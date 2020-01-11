import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTeam } from '../../../actions/teams';
import { Input, InputGroup, Button, Label } from '../../styled/forms';

function CreateTeamForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createTeam(name, description));
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="team-name">Team name</Label>
        <Input onChange={handleNameChange} value={name} id="team-name" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="team-description">Team description</Label>
        <Input
          onChange={handleDescriptionChange}
          value={description}
          id="team-description"
        />
      </InputGroup>
      <Button wide type="submit">
        Create team
      </Button>
    </form>
  );
}

export default CreateTeamForm;
