import React from 'react';
import {Link} from "react-scroll";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHandsHelping, faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "20px",
      backgroundColor: "red",
      '&::before': {
        content: '""',
        opacity: "0.4",
        height: "300px",
        width: "200px"
      
      },
    },
    cardContent: {
      paddingBottom: "0",
      textAlign: "left",
    

    },
    actionBtn: {
      justifyContent: "space-between"
    },
    btn: {
      color: "white",
      fontWeight: "bold"
    },
    headerDesc: {
      paddingLeft: "30px",
      fontSize: "16px"
    },
    icon: {
      fontSize: "1.6em"
    }
  }));

export const Title = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root} color="secondary">
          <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h4" component="h3" color="primary">Szukasz pewnego dostawcy? <br/>Zapraszamy do kontaktu</Typography>
          </CardContent>
          <CardActions className={classes.actionBtn}>
          <Typography className={classes.headerDesc} variant="body2" color="textSecondary" component="p">
            Specjalizujemy się w dostarczaniu na rynek krajowy artykułów służących do ochrony środowiska pracy.
          </Typography>
          <Button className={classes.btn} size="large" color="primary" variant="contained"> <Link to="cooperation" smooth={true} duration={1000}><FontAwesomeIcon className={classes.icon} icon={faEnvelope}/></Link></Button>
          </CardActions>

        </Card>
        )

}