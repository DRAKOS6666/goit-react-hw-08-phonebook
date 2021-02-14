import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.scss';

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

      <button className="submitBtn" type="submit">
        LogIn
      </button>
    </form>
  );
};

export default Login;
