import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper,  Button} from '@material-ui/core';
import CabinetImage from "./images/cabinet.png";
import cabinetsTrolleys from "./images/cabinets-trolleys.png"
import Color from 'color';
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${CabinetImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
    
  },

  
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
   
},

paperCardContentTitle: {
    fontWeight: "bold",
    paddingBottom: "10px",
},
  title: {
    color: "white",
    textShadow: "1px 1px 5px #272b2e",
    textTransform: "uppercase",
    fontSize: "2em",
    padding: "30px 0",
    textAlign: "center",
    [theme.breakpoints.up('md')] : {
      fontSize: "4em",
  },
},
imageWrapper: {
  backgroundImage: `url(${cabinetsTrolleys})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100px",
  width: "100%",
  [theme.breakpoints.up('sm')] : {
    height: "200px",
},
  [theme.breakpoints.up('md')] : {
    height: "350px",
},
  
},
paperCard: {
  padding: "20px",
  backgroundColor: `${Color('white').alpha(0.8).lighten(0.5)};`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
},
category: {
display: "flex",
flexDirection: "column",
paddingBottom: "20px",

},
categoryLink: {
  padding: "0px",
  paddingRight: "5px",
  "& a": {
    color: "#67b437",
    fontWeight: "bold",
  },
},
categoryTypes: {
  display: "flex",
  marginTop: "10px",
  flexDirection: "column",

},

categoryType: {
  display: "flex",
  marginBottom: "5px",
  width: "50%",
  [theme.breakpoints.up('md')] : {
    width: "30%"
},
[theme.breakpoints.up('lg')] : {
  width: "15%"
},
  "& a": {
    color: "white",
  },
},

space: {
  height: "60px",
  width: "100%",
}

    
  }));


const Cabinets = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                    Szafki i w??zki polietylenowe
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/32-szafy-na-chemikalia">Szafy polietylenowe</a>
              </Button>
              s?? to szafy zabezpieczaj??ce, kt??re doskonale toleruj?? najbardziej agresywne chemikalia i nie koroduj??. Znajduj?? zastosowanie w przemy??le oraz laboratoriach. S?? wykonane z wysokiej g??sto??ci polietylenu o podwy??szonej odporno??ci mechanicznej. Szafa jest bardzo solidna, ca??a konstrukcja nie ma tendencji do wyginania nawet pod maksymalnym obci????eniem.  Wyst??puj?? w dw??ch wersjach. Mniejszy model 15 l jest samodzieln?? jednostk??, natomiast  model  45 l mo??e by?? u??ywany  zar??wno jako niezale??na szafa chemiczna lub jako modu??, kt??ry mo??e by?? dowolnie ????czony kolejnymi rozbudowuj??c je pionowo lub poziomo.
            </Typography>
             
              

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/107-wozki-specjalistyczne#/page-2">W??zki polietylenowe</a>
              </Button>
              pod beczk?? lub kanistry z p??ynami (z r??czk?? lub bez r??czki), wyposa??one w 4 k????ka (w tym dwa z blokad??) zapewniaj??ce stabilno???? i zwrotno???? oraz u??atwiaj??ce szybkie przesuwanie i transportowanie. Wanienkowa konstrukcja spe??nia rol?? mobilnego basenu wychwytowego. Posiadaj?? du???? odporno???? chemiczn?? i mechaniczn??.
            </Typography>

               
              </div>

      
              
              </Paper>

              <div className={classes.space}></div>

            </Container>

            <Footer />
                   
        </div>
     );
}
 
export default Cabinets;