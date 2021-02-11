import React from 'react';
import { useSelector } from 'react-redux';

import { contactsSelectors } from 'redux/contacts';

import ContactListItem from './ContactListItem/ContactListItem';
import './ContactList.scss';

function ContactList() {
  const filter = useSelector(contactsSelectors.getFilter);
  const error = useSelector(contactsSelectors.getError);
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const filteredContacts = useSelector(contactsSelectors.filteredContactsMemo);

  return filteredContacts.length === 0 ? (
    <h3>Nothing found</h3>
  ) : (
    <>
      {filter && filteredContacts.length > 0 && (
        <h3 className="findedTittle">
          Was finded <span>{filteredContacts.length}</span> contact(s)
        </h3>
      )}
      {!isLoading ? (
        error ? (
          <h3>Sorry, an error occurred: {error}</h3>
        ) : (
          <ul className="contactList">
            {filteredContacts.map(contact => (
              <li className="contactListItem" key={contact.id}>
                <ContactListItem contact={contact} />
              </li>
            ))}
          </ul>
        )
      ) : (
        <h3>LOADING...</h3>
      )}
    </>
  );
}

export default ContactList;
