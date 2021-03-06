import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { register } from '../../actions/auth';
import { failureAlert } from '../alerts';
import { Button, Input, InputGroup, Label } from '../styled/forms';
import { SmallSpinner } from '../spinners';
import { CLEAR_ERRORS } from '../../contants/authStore';
import { COLOR_WHITE } from '../../contants/styles';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector(state => state.auth);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setErrors([]);

    let errors = [];

    if (!email && !validator.isEmail(email)) {
      errors = [...errors, 'Please provide correct e-mail address'];
    }

    if (password.length < 8) {
      errors = [...errors, 'Password must contain at least 8 characters'];
    }

    if (!username) {
      errors = [...errors, 'Please provied username'];
    }

    setErrors(errors);

    if (errors.length === 0) {
      dispatch(register(username, email, password));
      setUsername('');
      setEmail('');
      setPassword('');
    }
  }

  useEffect(() => {
    errors.map(error => failureAlert(error));
    if (error) {
      failureAlert(error);
    }

    return () => {
      dispatch({ type: CLEAR_ERRORS });
    };
  }, [errors, error, dispatch]);

  return (
    <Fragment>
      <form onSubmit={handleFormSubmit}>
        <InputGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={handleUsernameChange}
            type="text"
            placeholder="username"
            value={username}
            id="username"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={handleEmailChange}
            value={email}
            type="email"
            placeholder="email"
            id="email"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={handlePasswordChange}
            type="password"
            placeholder="password"
            value={password}
            id="password"
          />
        </InputGroup>
        <Button wide type="submit">
          {isLoading ? (
            <SmallSpinner size="18" color={COLOR_WHITE} />
          ) : (
            'Register'
          )}
        </Button>
      </form>
    </Fragment>
  );
}

export default RegisterForm;
