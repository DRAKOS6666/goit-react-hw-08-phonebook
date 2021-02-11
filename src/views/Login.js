import React from 'react';

const Login = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" placeholder="Enter your Name" />
      </label>
      <label>
        E-mail:
        <input type="email" placeholder="Enter your E-mail" />
      </label>
      <button className="submitBtn" type="button">
        LogIn
      </button>
    </form>
  );
};

export default Login;
