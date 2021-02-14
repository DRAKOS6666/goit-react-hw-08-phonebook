import Contacts from 'components/Contacts/Contacts';
import PrivateRoute from 'components/PrivateRoute';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

import './Home.scss';
import contacts from '../../icons/contacts.png'

const Home = () => {
  const isAuth = useSelector(authSelectors.getIsAuthUser);
  return (
    <div className="appTitle">
      <h1 >DRAKOS Phonebook</h1>
      <img src={contacts} alt="contact
      "className="homeImg"/>
      {isAuth && (
        <NavLink
          activeStyle={{ color: '#448AFF' }}
          className="navBtn"
          to="/contacts"
        >
          My Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Home;
