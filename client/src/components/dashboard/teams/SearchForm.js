import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterTeams } from '../../../actions/filters';
import { Input } from '../../forms';

function SearchForm() {
  const [phrase, setPhrase] = useState(
    useSelector(state => state.filters.searchTerm)
  );
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
