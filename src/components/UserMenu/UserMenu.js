import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import './UserMenu.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "3px 5px 3px 10px",

  },
}));

const UserMenu = () => {
  const user = useSelector(authSelectors.getUser);
  const dispatch = useDispatch();

  const classes = useStyles();

  const onClickLogout = () => {
    dispatch(authOperations.logoutUser());
  };

  return (
    <div className="userMenuContainer">
      <p>
        Welcome, <span className="userName">{user.name}</span>
      </p>
      <Button onClick={onClickLogout} className={classes.button} endIcon={<ExitToAppIcon />} variant="contained" color="secondary">
        Logout
      </Button>

    </div>
  );
};
export default UserMenu;
