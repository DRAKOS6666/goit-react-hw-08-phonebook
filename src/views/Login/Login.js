import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ButtonMUI from 'components/ButtonMUI/ButtonMUI';
import InputIcon from '@material-ui/icons/Input';
import TitleApp from 'components/TittleApp.js/TitleApp';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.loginUser({ email, password }));
  };

  return (
    <>
      <TitleApp />
      <form onSubmit={handleSubmit}>
        <label>
          E-mail:
      <input
            autoFocus
            required
            autoComplete="on"
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your E-mail"
          />
        </label>
        <label>
          Password:
      <input
            required
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your Name"
          />
        </label>
        <ButtonMUI type="submit" text="Login" startIcon={<InputIcon />} />
      </form></>
  );
};

export default Login;
