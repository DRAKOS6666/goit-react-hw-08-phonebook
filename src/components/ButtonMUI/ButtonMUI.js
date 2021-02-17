import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';

const useStyles = makeStyles(() => ({
    button: {
        backgroundColor: " #FF5722",
        maxWidth: "200px",
        display: "flex",
        margin: "0 auto"
    },
}))

const ButtonMUI = (props) => {
    const classes = useStyles();

    return (
        <Button
            {...props}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={props.startIcon || <Send />}
        >
            {props.text}
        </Button>
    );
};
export default ButtonMUI;