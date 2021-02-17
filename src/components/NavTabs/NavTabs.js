import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import UserMenu from 'components/UserMenu/UserMenu';
import { NavLink as LinkNav } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';


import 'components/App/styleVariables.scss'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#0288D1",
    marginBottom: "20px",
    paddingTop: "10px"
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const isAuth = useSelector(authSelectors.getIsAuthUser);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="static">
        {isAuth && <UserMenu />}
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab component={LinkNav} to="/" label="Home" />
          {isAuth && <Tab component={LinkNav} to="/contacts" label="Contacts" />}
          {!isAuth &&
            <Tab component={LinkNav} to="/register" label="Register" />}
          {!isAuth && <Tab component={LinkNav} to="/login" label="Login" />
          }
        </Tabs>
      </AppBar>
    </div>
  );
}
