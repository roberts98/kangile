import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { createTeam } from '../../../actions/teams';
import Input from '../../forms/Input';
import Button from '../../forms/Button';

const StyledForm = styled.form`
  text-align: center;
`;

const StyledInput = styled(Input)`
  width: 600px;
  height: 80px;
  font-size: 24px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 60px;
`;

function CreateTeamForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  function handleNameChange(value) {
    setName(value);
  }

  function handleDescriptionChange(value) {
    setDescription(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createTeam(name, description));
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        onChange={handleNameChange}
        value={name}
        placeholder="Team name"
      />
      <StyledInput
        onChange={handleDescriptionChange}
        value={description}
        placeholder="Team description"
      />
      <StyledButton
        margin="10px 0 0 0"
        type="submit"
        value="Create team"
        variant="primary"
      />
    </StyledForm>
  );
}

export default CreateTeamForm;
