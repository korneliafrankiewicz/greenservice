import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper,  Button} from '@material-ui/core';
import SeaImage from "./images/sea-water.jpg";
import waterBarriers from "./images/water-barriers.png"
import Color from 'color';
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${SeaImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
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
    textShadow: "1px 3px 5px #272b2e",
    textTransform: "uppercase",
    fontSize: "2em",
    padding: "30px 0",
    textAlign: "center",
    [theme.breakpoints.up('md')] : {
      fontSize: "4em",
  },
},
imageWrapper: {
  backgroundImage: `url(${waterBarriers})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100px",
  marginBottom: "10px",
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


const WaterBarriers = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                   Bariery wodne
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/217-bariery-wodne">Bariery wodne</a>
              </Button>
              zatrzymują pływające śmieci, zanieczyszczenia, chwasty, substancje ropopochodne i olejowe. Służą do kontroli mułu i osadów podczas prac w portach, akwenach wodnych, na rzekach. Bariery wodne są lekkie, kompaktowe, idealne do reagowania w sytuacjach awaryjnych, aby powstrzymać wycieki na powierzchni wód. Bariery dostępne w różnych rozmiarach, istnieje możliwość zamówienia wysięgników zrobionych na zamówienie.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/bariery-wodne/1409-permanent-boom-bariera-wodna-75-cm.html">Permanent Boom</a>
              </Button>
              - ten wytrzymały wysięgnik jest w stanie wytrzymać długotrwałe użytkowanie i trudne warunki stałych instalacji. Nadaje się do użytku w trudnych warunkach. Wsięgniki nadają się do długotrwałego użytkowania, ponieważ są solidne i wytrzymałe. Unoszenie się zapewniają sztywne pływaki wypełnione pianką, które są przykręcone do fartucha, który jest naturalnie sztywny, pomagając mu pozostać w wodzie w pozycji pionowej. Balast zapewnia metalowy łańcuch przymocowany do dolnej krawędzi. Bariera do substancji ropoochodnych i zanieczyszczeń jest nieprzepuszczalnym (niechłonnym) pływającym, przypominającym ogrodzenie wysięgnikiem używanym do zatrzymywania wycieków oleju na powierzchni wody. Bariery wodne są lekkie, kompaktowe i idealne do reagowania w sytuacjach awaryjnych, aby powstrzymać wycieki w wodach takich jak porty, rzeki i stawy. 
              Bariery dostępne w 2 standardowych rozmiarach i niestandardowych wymiarach na zamówienie. Wszystkie podane ceny dotyczą belek ze złączami ASTM, na życzenie możemy również dostarczyć inne złącza.
            </Typography>
            
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/tamowanie/1408-curtain-boom-bariera-wodna-substancje-ropopochodne.html">Curtain Boom</a>
              </Button>
              - bariera wodna olejowa i gruzowa jest szybka i łatwa we wdrożeniu. Zazwyczaj umieszcza się ją na wodach chronionych, takich jak rzeki, porty i zasoby wód chronionych. 
              Przeznaczony do użytku na spokojneej lub chronionej wodzie. Odcinki bariery są lekkie i wytrzymałe. Łatwe i wygodne do wdrożenia bez dodatkowych akcesoriów. W zestawie pojemnik do transooprtu i przechowywania. Zaleca się zakup odcinka 25m. 
              Bariera do substancji ropoochodnych i zanieczyszczeń jest nieprzepuszczalnym (niechłonnym) pływającym, przypominającym ogrodzenie wysięgnikiem używanym do zatrzymywania wycieków oleju na powierzchni wody. Bariery wodne są lekkie, kompaktowe i idealne do reagowania w sytuacjach awaryjnych, aby powstrzymać wycieki w wodach takich jak porty, rzeki i stawy. 
              Bariery dostępne w 2 standardowych rozmiarach i niestandardowych wymiarach na zamówienie. Wszystkie podane ceny dotyczą belek ze złączami ASTM, na życzenie możemy również dostarczyć inne złącza.
            </Typography>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/bariery-wodne/1322-fence-boom-bariera-wodna-zatrzymuje-oleje-i-zanieczyszczenia.html">Fence Boom</a>
              </Button>
              - bariera wodna olejowa i gruzowa jest szybka i łatwa we wdrożeniu. Zazwyczaj umieszcza się ją na wodach chronionych, takich jak rzeki, porty i zasoby wód chronionych. 
              Przeznaczony do użytku na spokojneej lub chronionej wodzie. Odcinki bariery są lekkie i wytrzymałe. Łatwe i wygodne do wdrożenia bez dodatkowych akcesoriów. W zestawie pojemnik do transooprtu i przechowywania. Zaleca się zakup odcinka 25m. 
              Bariera do substancji ropoochodnych i zanieczyszczeń jest nieprzepuszczalnym (niechłonnym) pływającym, przypominającym ogrodzenie wysięgnikiem używanym do zatrzymywania wycieków oleju na powierzchni wody. Bariery wodne są lekkie, kompaktowe i idealne do reagowania w sytuacjach awaryjnych, aby powstrzymać wycieki w wodach takich jak porty, rzeki i stawy. 
              Bariery dostępne w 2 standardowych rozmiarach i niestandardowych wymiarach na zamówienie. Wszystkie podane ceny dotyczą belek ze złączami ASTM, na życzenie możemy również dostarczyć inne złącza.
            </Typography>
  
              </div>



              

      
              
              </Paper>

              <div className={classes.space}></div>

            </Container>

            <Footer />
                   
        </div>
     );
}
 
export default WaterBarriers;