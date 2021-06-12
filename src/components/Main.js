import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImg from "../images/background.jpg";

const useStyles = makeStyles({
    root: {
      backgroundImage: {BackgroundImg},
      height: "100vh"
    },

  });

export const Main = () => {
    const classes = useStyles();
return (
    <div className={classes.root}>
    </div>
)
}