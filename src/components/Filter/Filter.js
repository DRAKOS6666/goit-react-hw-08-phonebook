import React from 'react';
import { useDispatch } from 'react-redux';

import { contactsActions } from 'redux/contacts';

function Filter() {
  const dispatch = useDispatch();

  const findContactQuery = ({ target }) =>
    dispatch(contactsActions.findContact(target.value.toLowerCase()));

  return (
    <label>
      Find contacts:
      <input
        placeholder="Enter a part of name or nubmer"
        type="search"
        autoComplete="on"
        onChange={findContactQuery}
      />
    </label>
  );
}

export default Filter;
