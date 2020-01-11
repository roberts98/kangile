import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { login } from '../../actions/auth';
import failureAlert from '../alerts/failureAlert';
import { Button, Input, InputGroup, Label } from '../forms';
import SmallSpinner from '../spinners/SmallSpinner';
import { COLOR_WHITE } from '../../contants/styles';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector(state => state.auth);

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

    setErrors(errors);

    if (errors.length === 0) {
      dispatch(login(email, password));
      setEmail('');
      setPassword('');
    }
  }

  useEffect(() => {
    errors.map(error => failureAlert(error));
    if (error) {
      failureAlert(error);
    }
  }, [errors, error]);

  return (
    <Fragment>
      <form onSubmit={handleFormSubmit}>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={handleEmailChange}
            value={email}
            type="email"
            id="email"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={handlePasswordChange}
            type="password"
            value={password}
            id="password"
          />
        </InputGroup>
        <Button wide type="submit">
          {isLoading ? (
            <SmallSpinner size={18} color={COLOR_WHITE} />
          ) : (
            'Log In'
          )}
        </Button>
      </form>
    </Fragment>
  );
}

export default LoginForm;
