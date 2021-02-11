import React from 'react';

const Register = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" placeholder="Enter your Name" />
      </label>
      <label>
        E-mail:
        <input type="text" placeholder="Enter your E-mail" />
      </label>
      <label>
        Password:
        <input type="password" placeholder="Enter your Password" />
      </label>
      <button type="submit" className="submitBtn">
        Register
      </button>
    </form>
  );
};
export default Register;
