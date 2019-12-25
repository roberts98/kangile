import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { createTeam } from '../../../actions/teams';
import Input from '../../forms/Input';
import Button from '../../forms/Button';
import SmallSpinner from '../../spinners/SmallSpinner';
import FullSpinner from '../../spinners/FullSpinner';

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
  const isLoading = useSelector(state => state.teams.isLoading);
  const dispatch = useDispatch();

  function handleChange(value) {
    setName(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(createTeam(name));
  }

  if (isLoading) {
    return <FullSpinner />;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        onChange={handleChange}
        value={name}
        placeholder="Team name"
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
