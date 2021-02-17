import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

import './Home.scss';
import contacts from '../../icons/contacts.png'
import ButtonMUI from 'components/ButtonMUI/ButtonMUI';
import ContactsIcon from '@material-ui/icons/Contacts';

const Home = () => {
  const isAuth = useSelector(authSelectors.getIsAuthUser);
  return (
    <div className="appTitle">
      <h1 >DRAKOS Phonebook</h1>
      <img src={contacts} alt="contact" className="homeImg" />
      {isAuth && <ButtonMUI startIcon={<ContactsIcon />} text="My Contacts" component={NavLink} to="/contacts" type="submit" />}
    </div>);
}

export default Home;
