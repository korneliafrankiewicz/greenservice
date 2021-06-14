import React from 'react';
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";
import { Button, TextField, Typography, Card, Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({

    contactFormWrapper: {
      padding: "30px",
      backgroundColor: `${Color('white').alpha(0.8).lighten(0.5)};`,
      display: "flex",
      flexDirection: "column",
      margin: "8px",
      justifyContent: "center", 
      alignItems: "center",
      margin: "80px 0"
    },
    contactFormContent:{
      display: "flex",
      width: "700px",
      flexDirection: "column",
      alignItems: "center"
    },
    form: {
      width: "600px",
      display: "flex",
      justifyContent: "center"
    },
    inputs: {
        display: "flex",
        marginBottom: "20px",
        justifyContent: "space-between",
        flexDirection: "column",
        [theme.breakpoints.up('md')] : {
          flexDirection: "row"
      },        
    },
    input: {
        width: "250px"
    },
    inutName: {
      marginRight: "30px"
    },
    contactHeader: {
      display: "flex",
        marginBottom: "15px",
        color: "#616161"
    },
    submitButtonWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "10px"
    }
  }));

export default function ContactUs() {
    const classes = useStyles();
    const { control, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_oj83ewr', 'template_iezzn9e', e.target, 'user_3JxDS70hRYCndFJ8j0eEN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (

<Paper className={classes.contactFormWrapper} id="contactForm">
  <div className={classes.contactFormContent}>
  <Typography variant="h4"  className={classes.contactHeader}>
<h3>Masz pytanie? Skontaktuj się z nami</h3>
</Typography>
<form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
                <div>
                  <div className={classes.inputs}>
                  <TextField
                    id="standard-textarea"
                    color="primary"
                    label="Wpisz imię"
                    placeholder="Wpis imię"
                    multiline
                    className={classNames(classes.input, classes.inutName)}
            
                  />

                <TextField
                    id="standard-textarea"
                    color="primary"
                    label="Wpisz numer telefonu"
                    placeholder="Wpisz numer telefonu"
                    multiline
                    className={classNames(classes.input, classes.inutName)}
            
                  />
                  
                  <TextField
                    id="standard-textarea"
                    color="primary"
                    label="Wpisz email"
                    placeholder="Wpisz email"
                    multiline
                    className={classes.input}

                  />
                  </div>
                  <div className={classes.message}>
                  <TextField
                    id="standard-multiline-static"
                    color="primary"
                    label="Wpisz wiadomość"
                    multiline
                    rows={6}
                    fullWidth
           
                  />
                  </div>

                  <div className={classes.submitButtonWrapper}>
                  <Button className={classes.submitButton} color="primary" type="submit" variant="contained">Wyślij</Button>
                  </div>

                  </div>
                  </form>

  </div>        
</Paper>


    );
  }