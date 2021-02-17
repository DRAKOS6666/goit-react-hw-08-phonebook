import React from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts/';
import Highlighter from 'react-highlight-words';
import { toast } from 'react-toastify';

import './ContactListItem.scss';


import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  iconButton: {
    color: "#04ff00"
  }
}));

function ContactListItem({ contact }) {
  const classes = useStyles();
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const handleDeleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
    toast.success('Contact deleted successfully');
  };

  return (
    <>
      <span className="contactName">
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[filter]}
          autoEscape={true}
          textToHighlight={name}
        />
        :
      </span>
      <span className="contactNumber">
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[filter]}
          autoEscape={true}
          textToHighlight={number}
        />
      </span>
      <a className="callRef" href={'tel:' + number}>
        <div className="buttonsWrapper">
          <IconButton className={classes.iconButton} aria-label="add an alarm">
            <CallIcon />
          </IconButton>
        </div>
      </a>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </Button>

    </>
  );
}

ContactListItem.propTypes = {
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;
