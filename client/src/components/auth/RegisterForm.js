import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { register } from '../../actions/auth';
import failureAlert from '../alerts/failureAlert';
import { Button, Input, InputGroup, Label } from '../forms';
import SmallSpinner from '../spinners/SmallSpinner';
import { CLEAR_ERRORS } from '../../contants/authStore';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const authStore = useSelector(state => state.auth);

  function handleUsernameChange(value) {
    setUsername(value);
  }

  function handleEmailChange(value) {
    setEmail(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
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
    if (authStore.error) {
      failureAlert(authStore.error);
    }

    return () => {
      dispatch({ type: CLEAR_ERRORS });
    };
  }, [errors, authStore.error, dispatch]);

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
        {authStore.isLoading ? (
          <SmallSpinner />
        ) : (
          <Button wide type="submit">
            Register
          </Button>
        )}
      </form>
    </Fragment>
  );
}

export default RegisterForm;
