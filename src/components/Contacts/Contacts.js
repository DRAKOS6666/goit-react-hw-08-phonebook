import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const error = useSelector(contactsSelectors.getError);
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);
  console.log('error', error);
  return (
    <>
      <h1>DRAKOS Phonebook</h1>
      <ContactForm />

      <h2>
        Contacts: <span className="contactsTittle">{contacts.length}</span>
      </h2>

      {contacts.length > 0 ? (
        <div className="contactListWrapper">
          <Filter />
          {error && <p>Sorry, an error occurred: {error}</p>} <ContactList />
        </div>
      ) : error ? (
        <h3>Contacts download failed</h3>
      ) : (
        <h3>Please add contacts...</h3>
      )}
    </>
  );
};

export default Contacts;
