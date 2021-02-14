import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const AuthNav = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && (
        <NavLink
          activeStyle={{ color: '#0288D1' }}
          className="navBtn"
          to="/"
          exact
        >
          Home
        </NavLink>
      )}
      <NavLink
        activeStyle={{ color: '#0288D1' }}
        className="navBtn"
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        activeStyle={{ color: '#0288D1' }}
        className="navBtn"
        to="/register"
      >
        Register
      </NavLink>
    </>
  );
};

export default AuthNav;
