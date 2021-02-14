import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';

import './UserMenu.scss';

const UserMenu = () => {
  const user = useSelector(authSelectors.getUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickLogout = () => {
    dispatch(authOperations.logoutUser());
    history.push('/');
  };

  return (
    <div className="userMenuContainer">
      <p>
        Welcome, <span className="userName">{user.name}</span>
      </p>
      <button type="button" className="logoutBtn" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
