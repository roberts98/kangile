import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { login } from '../../actions/auth';
import failureAlert from '../alerts/failureAlert';
import Input from '../forms/Input';
import Button from '../forms/Button';
import SmallSpinner from '../spinners/SmallSpinner';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const authStore = useSelector(state => state.auth);

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
    if (authStore.error) {
      failureAlert(authStore.error);
    }
  }, [errors, authStore.error]);

  return (
    <Fragment>
      <form onSubmit={handleFormSubmit}>
        <Input
          onChange={handleEmailChange}
          value={email}
          type="email"
          placeholder="email"
        />
        <Input
          onChange={handlePasswordChange}
          type="password"
          placeholder="password"
          value={password}
        />
        {authStore.isLoading ? (
          <SmallSpinner />
        ) : (
          <Button
            margin="10px 0 0 0"
            value="Login"
            type="submit"
            variant="primary"
          />
        )}
      </form>
    </Fragment>
  );
}

export default LoginForm;
