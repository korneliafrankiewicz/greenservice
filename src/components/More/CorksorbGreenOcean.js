import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Button} from '@material-ui/core';
import BcgImage from "./images/pallets.jpg";
import corksorbGreenOceanImg from "./images/corksorb-greenocean.png";
import Color from 'color';
import Footer from "../Footer"


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${BcgImage})`,
        backgroundSize: "cover",
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
  backgroundImage: `url(${corksorbGreenOceanImg})`,
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
width: "100%",

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


const CorksorbGreenOcean = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                    Sorbenty Corksorb i Green Ocean
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/70-sorbent-corksorb">Sorbent Corksorb</a>
              </Button>
              Bardzo lekki, w 100% naturalny sorbent korkowy dostarczany w formie granulatu. Nie jest toksyczny, bez dodatków chemicznych. Dostępny zarówno w wersji uniwersalnej, jak i hydrofobowej.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/sorbent-corksorb/107-sorbent-sypki-uniwersalny-chlonnosc-17-l-.html">Corksorb uniwersalny</a>
              </Button>
              do zastosowań ogólnych chłonący wodę oraz wszystkie substancje niezależnie od ich składu chemicznego. Z uwagi na to, że wiąże w sobie zaabsorbowaną ciecz i usuwa opary doskonale sprawdza się w sytuacjach gdy mamy do czynienia z niebezpiecznymi chemikaliami. Niezebrane pozostałości sorbentu korkowego nie powodują zagrożenia, że niebezpieczne substancje zostaną wypłukane lub na skutek czynników fizycznych wrócą do środowiska. Dodatkowo – po dłuższym czasie – substancje ropopochodne zamknięte w sorbencie korkowym ulegają biodegradacji.
            </Typography>
            

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/sorbent-corksorb/107-sorbent-sypki-uniwersalny-chlonnosc-17-l-.html">Opakowanie 17L.</a>
                  </Button>
                 
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/70-sorbent-corksorb#/rodzaj_corksorb-olejowe_hydrofobowe">Corksorb hydrofobowy</a>
              </Button>
             - olejowy o dużej chłonności. Absorbuje substancje ropopochodne, oleje bez absorbowania wody. Unosi  się na powierzchni wody nawet po wchłonięciu maksymalnej ilości zanieczyszczeń. Biorąc pod uwagę, że wiąże w sobie zaabsorbowaną ciecz doskonale nadaje się do usuwania skażeń olejowych ze środowiska naturalnego. Niezebrane pozostałości sorbentu korkowego nie powodują zagrożenia, że niebezpieczne substancje zostaną wypłukane lub na skutek czynników fizycznych wrócą do środowiska. Dodatkowo – po dłuższym czasie – substancje ropopochodne zamknięte w sorbencie korkowym ulegają biodegradacji.
            </Typography>

            <div className={classes.categoryTypes}>
            <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/sorbent-corksorb/105-sorbent-sypki-hydrofobowy-chlonnosc-17-l.html">Opakowanie 17l.</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/sorbent-corksorb/106-sorbent-sypki-hydrofobowy-chlonnosc-52-l.html">opakowanie 52l.</a>
                  </Button>


            </div>
               
              </div>


             



              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/74-sorbent-green-ocean">Sorbent GreenOcean</a>
              </Button>
              to uniwersalny, ekologiczny, bardzo lekki, naturalny sorbent mineralny. Bezpieczny dla ludzi i zwierząt. Doskonale wchłania oleje, ciecze ropopochodne, substancje chemiczne i wodę. Opakowanie 3kg chłonie 30 l cieczy.
              Nadaje się do użytku na większości powierzchni (płytkach, dywanach asfalcie, linoleum itd.). Sprawdzi się jako wyposażenie warsztatów, przedsiębiorstw sprzątających, stacji benzynowych. Sorbent wykonany z naturalnych włókien z nanowzmocnieniem.
            </Typography>
             
              <div className={classes.category}>
    

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/poduszki-sorbentowe/82-poduszki-sorpcyjne-uniwersalne-10-szt-chlonnosc-71-l.html">wymiar 46x46 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/poduszki-sorbentowe/83-poduszki-sorpcyjne-uniwersalne-20-szt-chlonnosc-64-l.html">wymiar 46x23 cm</a>
                  </Button>

                 
            </div>
               
              </div>

              
      
              
              </Paper>

              <div className={classes.space}></div>

            </Container>

            <Footer />
                   
        </div>
     );
}
 
export default CorksorbGreenOcean;