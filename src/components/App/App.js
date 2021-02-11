import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

import Contacts from 'components/Contacts/Contacts';
import Register from 'views/Register';
import Login from 'views/Login';
import Home from 'views/Home/Home';

import 'views/Home/Home.scss';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <nav className="navBar">
        <NavLink
          activeStyle={{ color: '#448AFF' }}
          className="navBtn"
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          activeStyle={{ color: '#448AFF' }}
          className="navBtn"
          to="/register"
        >
          Registration
        </NavLink>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
