import React from 'react';
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

import { Button, TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
        
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "60px 0"
    
    },
    contact_form_wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "60px",
        backgroundColor: "white"
    },
    inputs: {
        display: "flex",
        flexDirection: "column",
        marginRight: "60px"
        
    },
    input: {
        marginBottom: "20px"
    },
    message: {
        display: "flex",
        flexDirection: "column",
    },
    contact_header: {
        marginBottom: "15px",
        color: "#616161"
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

<div className={classes.contact_form_wrapper}>
{/* <Typography variant="h3" className={classes.contact_header}>
<h3>Masz pytanie? Skontaktuj się z nami</h3>
</Typography>

<form onSubmit={sendEmail} className={classes.root} noValidate autoComplete="off">
    <div className={classes.inputs}>
    <TextField  className={classes.input} label="Imię i nazwisko" variant="outlined" name="name"/>
    <TextField  className={classes.input} label="Nr.telefonu" variant="outlined" name="phone" />
    <TextField  className={classes.input} label="E-mail" variant="outlined" name="email"/>
    </div>
    <div className={classes.message}>
    <TextField
            id="filled-multiline-static"
            label="Zostaw wiadomość"
            fullWidth="true"
            multiline
            rows="8"
            margin="normal"
            variant="filled"
            name="message"
            />
            <Button type="submit" variant="contained">Wyślij</Button>
    </div>
</form> */}

<form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
                <div>
                  <div className={classes.inputs}>
                  <TextField
                    id="standard-textarea"
                    color="primary"
                    label="Wpisz swoje imię"
                    placeholder="Wpisz swoje imię"
                    multiline
                    className={classes.input}
            
                  />
                  
                  <TextField
                    id="standard-textarea"
                    color="primary"
                    label="Wpisz swój email"
                    placeholder="Placeholder"
                    multiline
               
               
                  />
                  </div>
                  <div className={classes.message}>
                  <TextField
                    id="standard-multiline-static"
                    color="primary"
                    label="Wpisz swoją wiadomość"
                    multiline
                    rows={6}
                    fullWidth
           
                  />
                  </div>

                  <div className={classes.submitButtonWrapper}>
                  <Button className={classes.submitButton} type="submit" variant="contained">Wyślij</Button>
                  </div>
                  </div>
                  </form>
                       
</div>


    );
  }