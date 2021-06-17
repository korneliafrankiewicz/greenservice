import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Card, Button, CardActions, CardContent } from '@material-ui/core';
import SorbentsImage from "./images/sorbentBcg.JPG";
import sorbents from "./images/sorbenty.png";
import Color from 'color';
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${SorbentsImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    
  },

  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
   
},
  title: {
    color: "white",
    textShadow: "1px 1px 5px #272b2e",
    textTransform: "uppercase",
    fontSize: "4em",
    padding: "30px 0"
},
imageWrapper: {
  backgroundImage: `url(${sorbents})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: "350px",
  width: "100%"
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
  width: "15%",
  "& a": {
    color: "white",
  },
},

space: {
  height: "60px",
  width: "100%",
}

    
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

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#">Maty uniwersalne</a>
              </Button>
              to włóknina hydrofilna (absorbująca wodę), wchłaniająca substancje ciekłe niezależnie od ich składu chemicznego. Występują w kolorze szarym. Oferujemy je w postaci mat i rolek. Mogą być perforowane w celu wygodniejszego ich dzielenia na mniejsze odcinki lub nieperforowane mające zastosowanie w sytuacjach gdy używamy ich na większych powierzchniach.
              W ofercie posiadamy włókninę jednowarstwową lub trójwarstwową o następujących grubościach:
            </Typography>

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-cienka">180 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-srednia">275 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-gruba">350 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-bardzo_gruba">powyżej 350 g/m²</a>
                  </Button>
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe">Maty olejowe</a>
              </Button>
              Sorbenty olejowe to włóknina hydrofobowa (odpychająca wodę), zatrzymująca oraz wchłaniająca wszystkie oleje i ciecze ropopochodne z każdego rodzaju powierzchni. Z uwagi na właściwości odpychające wodę, doskonale nadają się do usuwania zanieczyszczeń z powierzchni wód płynących, stojących i ścieków, a także z powietrza w stacjach pneumatycznych. Sorbent do oleju nawet po wchłonięciu maksymalnej jego ilości unosi się na wodzie.  Oferujemy je w postaci mat i rolek. Mogą być perforowane w celu wygodniejszego ich dzielenia na mniejsze odcinki lub nieperforowane mające zastosowanie na większych powierzchniach. 
              Występują w kolorze białym lub niebieskim. W ofercie posiadamy włókninę jednowarstwową, dwuwarstwową i trójwarstwową o następujących grubościach
            </Typography>

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-cienka">180 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-srednia">275 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-gruba">350 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-bardzo_gruba">powyżej 350 g/m²</a>
                  </Button>
            </div>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/181-maty-chemiczne">Maty chemiczne</a>
              </Button>
              Sorbenty chemiczne to syntetyczna włóknina przystosowana do absorpcji agresywnych substancji. Występują w postaci hydrofilnej (pochłaniające wodę), wchłaniają kwasy, rozpuszczalniki i inne substancje ciekłe niezależnie od ich składu chemicznego. Szybko i skutecznie usuwają przypadkowe, niebezpieczne wycieki i rozlewy płynnych żrących substancji chemicznych, w tym najbardziej agresywnych kwasów i zasad. Przeznaczone m.in. do ochrony powierzchni roboczych przed niespodziewanym wyciekiem groźnych, trujących substancji w laboratoriach, halach przemysłowych i magazynach. Oferowane w postaci mat i rolek. Dostępne z perforacją - w celu wygodniejszego dzielenia na mniejsze arkusze lub bez perforacji - stosowane w sytuacjach gdy używamy ich do zabezpieczenia większych powierzchni. 
              Występują w kolorach żółtym. W ofercie dostępne włókniny jednowarstwowe, dwuwarstwowe i trójwarstwowe różnych grubości.
            </Typography>

            <div className={classes.categoryTypes}>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/181-maty-chemiczne#/grubosc-srednia">275 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/181-maty-chemiczne#/grubosc-gruba">350 g/m²</a>
                  </Button>

            </div>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/213-maty-torowe">Maty torowe</a>
              </Button>
              Mata sorbentowa torowa, nieprzepuszczalna, bardzo gruba. Wierzchnia (czarna) warstwa jest odporna na promieniowanie UV, bardzo chłonna warstwa środkowa odpowiada za doskonałe właściwości sorpcyjne, a nieprzepuszczalna warstwa dolna (biała) chroni przed przedostaniem się substancji szkodliwych do gleby. Warstwę wewnętrzną stanowi miękka włóknina (meltblown) utrzymująca wewnątrz zaabsorbowaną ciecz.
              Maty torowe znajdują zastosowanie przede wszystkim podczas tankowania lokomotyw, w okolicach peronów, tymczasowych napraw oraz podczas oliwienia torów. 
              Stosowane są również w przemyśle tam gdzie potrzebne jest zastosowanie szczególnie mocnych mat olejowych, które zapobiegają przedostawaniu się do podłoża szkodliwych substancji.
            </Typography>

            <div className={classes.categoryTypes}>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/213-maty-torowe">powyżej 350 g/m²</a>
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
 
export default Sorbents;