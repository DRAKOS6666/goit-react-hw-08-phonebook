import React from 'react';
import { Link, } from 'react-router-dom';

const TitleApp = () => {

    return (
        <Link
            to="/"
            exact
        >
            <h1>DRAKOS Phonebook</h1>
        </Link>
    );
};
export default TitleApp;