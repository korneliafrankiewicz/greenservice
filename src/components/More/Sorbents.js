import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Card, Button, CardActions, CardContent } from '@material-ui/core';
import SorbentsImage from "../../images/sorbentBcg.JPG"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${SorbentsImage})`,
        backgroundSize: "cover",
    
  },

  contentWrapper: {
    display: "flex",
    justifyContent: "center",
   
},
  title: {
    color: "white",
    textShadow: "1px 1px 5px #272b2e",
    textTransform: "uppercase",
    fontSize: "4em",
    paddingTop: "30px"
},

    
  }));


const Sorbents = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                    Sorbenty polipropylenowe
                    </Typography> 

                    <div>Content</div>
              </div>
            </Container>
                   
        </div>
     );
}
 
export default Sorbents;