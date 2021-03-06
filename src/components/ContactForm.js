import React, {useState, useEffect} from 'react';
import emailjs from "emailjs-com";
import { Button, TextField, Typography, Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';
import classNames from 'classnames';
import Alert from '@material-ui/lab/Alert';


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
      width: "80%",
      flexDirection: "column",
      alignItems: "center"
    },
    form: {
      display: "flex",
      justifyContent: "center",
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
        width: "250px",
        marginBpttom: "15px",
    },
    inutName: {
      marginRight: "30px"
    },
    contactHeader: {
      display: "flex",
      marginBottom: "15px",
      color: "#616161",
      textAlign: "center",
      fontSize: "1.4em",
      [theme.breakpoints.up('sm')] : {
        fontSize: "2em",
    },
    },
    submitButtonWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "10px",
      marginBottom: "10px",
    },

    alertMessage: {
      display: "flex",
      marginBottom: "5px"
    }

  }));

export default function ContactUs() {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [unValidName,setUnValidName]=useState(false);
    const [unValidPhone,setUnValidPhone]=useState(false);
    const [unValidEmail,setUnValidEmail]=useState(false);
    const [unValidMess,setUnValidMess]=useState(false);
    const [success,setSuccess]=useState(false);

    const handleChangeName = (e) => {
      setName(e.target.value)
    };
    const handleChangeEmail = (e) => {
      setEmail(e.target.value)
    };
    const handleChangePhone = (e) => {
      setPhone(e.target.value)
    };
    const handleChangeMessage = (e) => {
      setMessage(e.target.value)
    };

    
    useEffect(() => {
      setName("");
      setPhone("");
      setEmail("");
      setMessage("")
    }, [success]);



    const onSubmit  = (e) => {
      e.preventDefault();

      setUnValidName(false);
      setUnValidPhone(false);
      setUnValidEmail(false);
      setUnValidMess(false);

      let inquiry = {
        name : "",
        phone: "",
        email : "",
        message: "",
      };


      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase()) && email.length > 0;
  
    }

    function validatePhone(phone) {
      return phone.length > 6;
    }


   
    function validateName(name) {
      return name.length > 3;
  }

      function validateMessage(message) {
        return message.length >= 10;
      }

if(validateName(name)){
  inquiry.name=name
} else {
  setUnValidName(true)
  setSuccess(false)
} 

if(validatePhone(phone)){
  inquiry.phone=phone
} else {
  setUnValidPhone(true)
  setSuccess(false)
} 

if(validateEmail(email)){
  inquiry.email=email
} else {
  setUnValidEmail(true)
  setSuccess(false)
}

if(validateMessage(message)){
  inquiry.message=message
} else {
  setUnValidMess(true)
  setSuccess(false)
}
  
if(validateEmail(email) && validateName(name) && validatePhone(phone) && validateMessage(message)){
  emailjs.sendForm('service_oj83ewr', 'template_iezzn9e', e.target, 'user_3JxDS70hRYCndFJ8j0eEN')
  .then((result) => {
    setSuccess(true)
      console.log(result.text);
   
  }, 
  (error) => {
      console.log(error.text);
  });
  
  e.target.reset()
}

        
    }
  
    return (

<Paper className={classes.contactFormWrapper} id="contact">
  <div className={classes.contactFormContent}>
  <Typography variant="h4"  className={classes.contactHeader}>
<h3>Masz pytanie? Skontaktuj si?? z nami!</h3>
</Typography>
          

<form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
                <div>
                  <div className={classes.inputs}>
                  <TextField
                    id="standard-textarea"
                    color="primary"
                    label="Wpisz imi??"
                    placeholder="Wpisz imi??"
                    multiline
                    className={classNames(classes.input, classes.inutName)}
                    name="name"
                    value={name}
                    onChange={handleChangeName}
                  />

                <TextField
                    id="standard-textarea"
                    color="primary"
                    label="Wpisz numer telefonu"
                    placeholder="Wpisz numer telefonu"
                    multiline
                    className={classNames(classes.input, classes.inutName)}
                    name="phone"
                    value={phone}
                    onChange={handleChangePhone}
                  />
                  
                  <TextField
                    id="standard-textarea"
                    color="primary"
                    label="Wpisz email"
                    placeholder="Wpisz email"
                    multiline
                    className={classes.input}
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                  </div>
                  <div className={classes.message}>
                  <TextField
                    id="standard-multiline-static"
                    color="primary"
                    label="Wpisz wiadomo????"
                    multiline
                    rows={6}
                    fullWidth
                    name="message"
                    value={message}
                    onChange={handleChangeMessage}
                  />
                  </div>

                  <div className={classes.submitButtonWrapper}>
                  <Button className={classes.submitButton} color="primary" type="submit" variant="contained">Wy??lij</Button>
                  </div>

                <div className={classes.alerts}>
                    {unValidName && <Alert className={classes.alertMessage} severity="error">Imi?? jest nieprawid??owe</Alert>}
                      {unValidPhone && <Alert className={classes.alertMessage} severity="error">Podaj prawid??owy numer telefonu</Alert>}
                      {unValidEmail && <Alert className={classes.alertMessage} severity="error">Podany email jest nieprawid??owy</Alert>}
                      {unValidMess && <Alert className={classes.alertMessage} severity="error">Wiadomo???? jest za kr??tka</Alert>}                    
                      { success && <Alert className={classes.alertMessage} severity="success">Wiadomo???? zosta??a wys??ana. Wkr??tce si?? skontaktujemy!</Alert>}
        
                </div>
                 

                     
                  </div>
       
                  </form>

  </div>        
</Paper>


    );
  }