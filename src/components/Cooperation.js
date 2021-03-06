import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';
import Color from 'color';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginTop: "30px",
  
      '& > *': {
        margin: theme.spacing(1),
        width: "100%",
      
      },
    },
    paperCard: {
      padding: "30px",
      backgroundColor: `${Color('white').alpha(0.8).lighten(0.5)};`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0",
    },
    paperCardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

     
    },
    paperCardspan1: {
      fontWeight: "bold",
    },
    paperCardspan: {
     padding: "20px 0",
    },
    categories: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      flexWrap: "wrap",
      [theme.breakpoints.up('md')] : {
        justifyContent: "space-between",
    },
    },
    categoryLink: {
      display: "flex",
      width: "40%",
      height: "50px",
      backgroundColor: "#67b437",
      margin: "5px",
      fontSize: "0.7em",

      [theme.breakpoints.up('sm')] : {
        width: "30%",
        margin: "5px",
        padding: "2px 6px",
    },
    [theme.breakpoints.up('lg')] : {
      width: "12%",
      margin: "0",
      fontSize: "1em",
  },
      "&:hover": {
        backgroundColor: "#9ae767",
    },
      "& a": {
        color: "white",
        fontSize: "0.9em",
        "&:hover": {
          color: "#373737;",
      },
      },
      cooperationFooter: {
        display: "flex",
        paddingTop: "20px",

      }
    }
  }));

export const Cooperation = () => {
    const classes = useStyles();


    return (
      <div className={classes.root} id="cooperation">
        <Paper className={classes.paperCard}>
            <Typography className={classes.paperCardContent}>
              <span className={classes.paperCardspan1}>
              Zajmujemy się kompleksowym zaopatrywaniem dystrybutorów z branży przemysłowej. 
              Skontaktuj się z nami w celu otrzymania indywidualnej oferty. Posiadamy konkurencyjne ofert i stale poszerzający się 
              asortyment, na który udzielamy rabatów ilościowych.
              Specjalizujemy się w imporcie produktów służących do ochrony środowiska pracy i dostarczaniu firmom zaopatrzenia przemysłu i utrzymania ruchu. Oferujemy  wysokiej jakości sorbenty polipropylenowe oraz naturalne, szeroką gamy wanien, kuwet i szaf polietylenowych, hydrozapór, ograniczników rozlewu, a także dekontaminacyjnych mat samoprzylepnych 
              </span>
              <span className={classes.paperCardspan}>
              Firma Green Service specjalizuje się w dostarczaniu na rynek krajowy artykułów służących do ochrony środowiska pracy. Głównym obszarem naszego zainteresowania są rozwiązania podnoszące bezpieczeństwo składowania, 
              przechowywania i użytkowania materiałów niebezpiecznych, a także produkty do działań ratowniczych po wystąpieniu awarii i wydostania się do środowiska substancji trujących. Naszym głównym rynkiem zaopatrzenia są 
              Stany Zjednoczone. To tam od lat obowiązują najbardziej restrykcyjne normy związane z przewożeniem, składowaniem i obsługą materiałów niebezpiecznych. Nawiązaliśmy długoletnią współpracę z kilkoma wiodącymi producentami, 
              kierując się kryterium jakości i pewności dostaw. Nieprzerwanie staramy się rozpoznawać potrzeby naszego rynku, pojawiające się wraz z rozwojem technologii, zmianami w regulacjach, a także wzrostem świadomości przedsiębiorców
               o zagrożeniach. Wprowadzamy także nowe produkty starając się wskazywać na sprawdzone rozwiązania funkcjonujące z dobrym skutkiem. Oferowane przez nas artykuły BHP spełniają restrykcyjne wymagania jakościowe. Obecnie nasz asortyment możemy podzielić na następujące kategorie:
              </span>
            </Typography>

            <div className={classes.categories}>
            <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/19-magazynowanie-i-transport">Magazynowanie i transport</a>
              </Button>

              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/21-wyposazenie-zakladu">Wyposażenie zakładu</a>
              </Button>

              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/68-maty-sorbentowet">Maty sorbentowe</a>
              </Button>

              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/207-sorbenty">Sorbenty</a>
              </Button>

              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/20-tamowanie">Tamowanie</a>
              </Button>

              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/192-pojemniki-i-zbiorniki">Pojemniki i zbiorniki</a>
              </Button>

              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/77-bezpieczenstwo">Bezpieczeństwo</a>
              </Button>

              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/38-higiena-i-dezynfekcja">Higiena i dezynfekcja</a>
              </Button>
            </div>

            <Typography  variant="h6" className={classes.cooperationFooter}>Zapraszamy również zakłady przemysłowe do bezpośredniego zaopatrywania się w sklepie oferując kompleksowy asortyment.</Typography>
        </Paper>
  

      </div>
    );
}