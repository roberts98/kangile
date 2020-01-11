import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterTeams } from '../../../actions/filters';
import { Input } from '../../styled/forms';

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
      onChange={e => handleChange(e.target.value)}
      value={phrase}
      placeholder="Search..."
    />
  );
}

export default SearchForm;
