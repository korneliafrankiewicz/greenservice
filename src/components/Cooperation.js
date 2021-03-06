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
              Zajmujemy si?? kompleksowym zaopatrywaniem dystrybutor??w z bran??y przemys??owej. 
              Skontaktuj si?? z nami w celu otrzymania indywidualnej oferty. Posiadamy konkurencyjne ofert i stale poszerzaj??cy si?? 
              asortyment, na kt??ry udzielamy rabat??w ilo??ciowych.
              Specjalizujemy si?? w imporcie produkt??w s??u????cych do ochrony ??rodowiska pracy i dostarczaniu firmom zaopatrzenia przemys??u i utrzymania ruchu. Oferujemy  wysokiej jako??ci sorbenty polipropylenowe oraz naturalne, szerok?? gamy wanien, kuwet i szaf polietylenowych, hydrozap??r, ogranicznik??w rozlewu, a tak??e dekontaminacyjnych mat samoprzylepnych 
              </span>
              <span className={classes.paperCardspan}>
              Firma Green Service specjalizuje si?? w dostarczaniu na rynek krajowy artyku????w s??u????cych do ochrony ??rodowiska pracy. G????wnym obszarem naszego zainteresowania s?? rozwi??zania podnosz??ce bezpiecze??stwo sk??adowania, 
              przechowywania i u??ytkowania materia????w niebezpiecznych, a tak??e produkty do dzia??a?? ratowniczych po wyst??pieniu awarii i wydostania si?? do ??rodowiska substancji truj??cych. Naszym g????wnym rynkiem zaopatrzenia s?? 
              Stany Zjednoczone. To tam od lat obowi??zuj?? najbardziej restrykcyjne normy zwi??zane z przewo??eniem, sk??adowaniem i obs??ug?? materia????w niebezpiecznych. Nawi??zali??my d??ugoletni?? wsp????prac?? z kilkoma wiod??cymi producentami, 
              kieruj??c si?? kryterium jako??ci i pewno??ci dostaw. Nieprzerwanie staramy si?? rozpoznawa?? potrzeby naszego rynku, pojawiaj??ce si?? wraz z rozwojem technologii, zmianami w regulacjach, a tak??e wzrostem ??wiadomo??ci przedsi??biorc??w
               o zagro??eniach. Wprowadzamy tak??e nowe produkty staraj??c si?? wskazywa?? na sprawdzone rozwi??zania funkcjonuj??ce z dobrym skutkiem. Oferowane przez nas artyku??y BHP spe??niaj?? restrykcyjne wymagania jako??ciowe. Obecnie nasz asortyment mo??emy podzieli?? na nast??puj??ce kategorie:
              </span>
            </Typography>

            <div className={classes.categories}>
            <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/19-magazynowanie-i-transport">Magazynowanie i transport</a>
              </Button>

              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/21-wyposazenie-zakladu">Wyposa??enie zak??adu</a>
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
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/77-bezpieczenstwo">Bezpiecze??stwo</a>
              </Button>

              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/38-higiena-i-dezynfekcja">Higiena i dezynfekcja</a>
              </Button>
            </div>

            <Typography  variant="h6" className={classes.cooperationFooter}>Zapraszamy r??wnie?? zak??ady przemys??owe do bezpo??redniego zaopatrywania si?? w sklepie oferuj??c kompleksowy asortyment.</Typography>
        </Paper>
  

      </div>
    );
}