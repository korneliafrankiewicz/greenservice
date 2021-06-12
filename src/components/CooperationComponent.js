import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from "react-scroll";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ImageGS from '../images/greenservice_icon.png';
import { Container, Typography, Paper, Card, Button, CardActions, CardContent } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Color from 'color';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "90px",
        height: "100%",
    
        [theme.breakpoints.up('md')] : {
            height: "400px",
            marginTop: "120px",
        },
    
    },
    contentWrapper: {
        display: "flex",
        justifyContent: "space-around",
       
        [theme.breakpoints.up('lg')] : {
            justifyContent: "space-between",
        },
       
    },
    titleWrapper: {
        display: "flex",
        maxWidth: "80%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        [theme.breakpoints.up('lg')] : {
            maxWidth:"65%",
        },
        [theme.breakpoints.up('md')] : {
            paddingTop: "30px",
      
        },
     
    },
    title: {
        color: "white",
        textShadow: "1px 1px 5px #272b2e",
        textTransform: "uppercase",
        fontSize: "bold",
    },
    titleDescription: {
            display: "flex",
            width: "100%",
            height: "100%",
            color: "white",
            alignSelf: "flex-start",
            flexDirection: "column",
            marginTop: "20px",
            borderRadius: "6px",
            backgroundColor: `${Color('white').alpha(0.8).lighten(0.5)};`,
            [theme.breakpoints.up('lg')] : {
                width: "90%",
            },
  
    },

    cardContent: {
        paddingBottom: "0",
        textAlign: "left",
        
  
      },
      action: {
        justifyContent: "space-between",
      },
      btn: {
        color: "white",
        marginLeft: "20px"
      },
      headerDesc: {
        paddingLeft: "15px",
        fontSize: "16px",
        width: "90%"
      },
      icon: {
        fontSize: "1.6em"
      },

    gsIcon: {
        display: "none",
        width: "400px",
        backgroundImage: `url(${ImageGS})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        opacity: "0%",
        [theme.breakpoints.up('lg')] : {
            display: "flex",
            opacity: "60%",
        }
    }

  })); 

export const CooperationComponent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"))
    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.contentWrapper}>
                    <div className={classes.titleWrapper}>
                    <Typography className={classes.title} variant="h2" >
                    Służąc przemysłowi, chronimy środowisko
                    </Typography>

                    <Card color="secondary" className={classes.titleDescription}> 
                         <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h4" color="secondary">Szukasz pewnego dostawcy? <br/>Zapraszamy do kontaktu</Typography>
                        </CardContent>

                        <CardActions className={classes.action}>
                        <Typography className={classes.headerDesc} variant="body2" color="secondary" component="p">
                            Specjalizujemy się w dostarczaniu artykułów służących do ochrony środowiska pracy, zwłaszcza wysokiej jakości sorbentów, mat sorpcyjnych i wanien wychwytowych oraz różnego rodzaju wózków.
                        </Typography>
                        <Button className={classes.btn} size="large" color="primary" variant="contained"> <Link to="cooperation" smooth={true} duration={1000}><FontAwesomeIcon className={classes.icon} icon={faEnvelope}/></Link></Button>
                        </CardActions>
                    </Card>
                    </div>

                    <div className={classes.gsIcon}></div>
                
                </div>
             
            </Container>
        </div>
    )
}