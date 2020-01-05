import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterTeams } from '../../../actions/teams';
import Input from '../../forms/Input';

function SearchForm() {
  const [phrase, setPhrase] = useState('');
  const dispatch = useDispatch();

  function handleChange(value) {
    setPhrase(value);
    dispatch(filterTeams(value));
  }

  return (
    <Input
      onChange={value => handleChange(value)}
      value={phrase}
      placeholder="Search..."
    />
  );
}

export default SearchForm;
