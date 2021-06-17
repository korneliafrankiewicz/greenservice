import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Card, Button, CardActions, CardContent } from '@material-ui/core';
import SocksImage from "./images/socks2.jpg";
import socks from "./images/socks.png"
import Color from 'color';
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${SocksImage})`,
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
  backgroundImage: `url(${socks})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: "150px",
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


const SocksPillows = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                    Poduszki i rękawy
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#">Rękawy sorpcyjne</a>
              </Button>
              służą do tamowania wycieków, zbierania płynów wyciekających z maszyn, beczek, zbiorników, zaworów itp., a w przypadku awarii do ograniczenia obszaru zagrożonego wyciekiem.  Są uszyte z mocnego materiału, napełnione bardzo chłonną włókniną absorbującą. Można je dowolnie kształtować używając w ciasnych, trudno dostępnych miejscach. Wykorzystywane są również przy wyciekach wzdłużnych, doskonale sprawdzają się do ochrony chodników, linii produkcyjnych oraz wejść.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#/rodzaj_sorbenty_pp-uniwersalne">Rękawy uniwersalne</a>
              </Button>
              ogólnego zastosowania – są przystosowane do absorpcji substancji nieagresywnych. Wypełnione włókniną hydrofilną (absorbującą wodę) wchłaniają  płyny przemysłowe, chłodząco-smarujące i hydrauliczne, ciecze ropopochodne, oleje, glikole, wodę itp. Występują w kolorze szarym.
            </Typography>
            

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/70-rekawy-sorpcyjne-uniwersalne-30-szt-chlonnosc-95-l.html">długość 1,2 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/71-rekawy-sorpcyjne-uniwersalne-15-szt-chlonnosc-95-l.html">długość 2,4 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/72-rekawy-sorpcyjne-uniwersalne-10-szt-chlonnosc-95-l.html">dłogość 3,6 m</a>
                  </Button>

                 
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#/rodzaj_sorbenty_pp-olejowe_hydrofobowe">Rękawy olejowe</a>
              </Button>
              zatrzymują oraz chłoną wszystkie oleje i substancje ropopochodne.  Są wypełnione włókniną hydrofobową (odpychającą wodę).  Z uwagi na właściwości odpychające wodę, doskonale nadają się do usuwania zanieczyszczeń z powierzchni wód płynących, stojących i ścieków –  nawet po wchłonięciu maksymalnej ilości oleju unoszą się na powierzchni wody.
            </Typography>

            <div className={classes.categoryTypes}>
            <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/572-rekawy-sorpcyjne-olejowe-dl-12m-20-szt-chlonnosc-635-l.htmla">długość 1,2 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/508-rekawy-sorpcyjne-olejowe-10-szt-chlonnosc-64-l.html">długość 2,4 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/509-rekawy-sorbentowe-olejowe-5-szt-chlonnosc-47-l.html">dłogość 3,6 m</a>
                  </Button>

            </div>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#/rodzaj_sorbenty_pp-chemiczne">Rękawy chemiczne</a>
              </Button>
              są przystosowane do absorpcji agresywnych substancji. Wypełnione włókniną hydrofilną (absorbującą wodę), wchłaniają kwasy, rozpuszczalniki,  oleje i substancje ropopochodne oraz  inne substancje ciekłe niezależnie od ich składu chemicznego. Występują w kolorach żółtym
            </Typography>

            <div className={classes.categoryTypes}>

            <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/80-rekawy-sorpcyjne-chemiczne-30-szt-chlonnosc-95-l.html">długość 1,2 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/522-rekawy-sorpcyjne-chemiczne-dl-24m-10-szt-chlonnosc-64-l.html">długość 2,4 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/523-rekawy-sorpcyjne-chemiczne-dl-36m-5-szt-chlonnosc-45-l.html">dłogość 3,6 m</a>
                  </Button>


            </div>
               
              </div>



              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/210-poduszki-sorbentowe">Poduszki sorpcyjne</a>
              </Button>
              są idealnym rozwiązaniem do pochłaniania dużych, punktowych wycieków doskonale nadają się do podkładania przy naprawach i czynnościach obsługowych. Stosuje się je jako element wymienny w pojemnikach, które gromadzą różnego rodzaju wycieki z nieszczelnych zaworów i przewodów. Dzięki elastycznej formie są idealnym rozwiązaniem do miejsc trudno dostępnych. Są uszyte z mocnego materiału, napełnione bardzo chłonną włókniną absorbującą. Pozwalają uniknąć rozbryzgów, pozostawiając powierzchnię sucha i czystą Występują w kolorze szarym.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/210-poduszki-sorbentowe#/rodzaj_sorbenty_pp-uniwersalne">Poduszki uniwersalne</a>
              </Button>
              ogólnego zastosowania – są przystosowane do absorpcji substancji nieagresywnych. Wypełnione włókniną hydrofilną (absorbującą wodę) wchłaniają  płyny przemysłowe, chłodząco-smarujące i hydrauliczne, ciecze ropopochodne, oleje, glikole, wodę itp. Występują w kolorze szarym.
            </Typography>
            

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/poduszki-sorbentowe/82-poduszki-sorpcyjne-uniwersalne-10-szt-chlonnosc-71-l.html">wymiar 46x46 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/poduszki-sorbentowe/83-poduszki-sorpcyjne-uniwersalne-20-szt-chlonnosc-64-l.html">wymiar 46x23 cm</a>
                  </Button>

                 
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/210-poduszki-sorbentowe#/rodzaj_sorbenty_pp-olejowe_hydrofobowe">Poduszki olejowe</a>
              </Button>
              zatrzymują oraz chłoną wszystkie oleje i substancje ropopochodne.  Są wypełnione włókniną hydrofobową (odpychającą wodę).  Z uwagi na właściwości odpychające wodę, doskonale nadają się do usuwania zanieczyszczeń z powierzchni wód płynących, stojących i ścieków –  nawet po wchłonięciu maksymalnej ilości oleju unoszą się na powierzchni wody.
            </Typography>

            <div className={classes.categoryTypes}>
            <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/poduszki-sorbentowe/84-poduszka-olejowa-10-szt-chlonnosc-71-l.html">wymiar 46x46 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/poduszki-sorbentowe/85-poduszki-olejowe-sorpcyjne-20-szt-chlonnosc-64-l.html">wymiar 46x23 cm</a>
                  </Button>


            </div>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/210-poduszki-sorbentowe#/rodzaj_sorbenty_pp-chemiczne">Poduszki chemiczne</a>
              </Button>
              są przystosowane do absorpcji agresywnych substancji. Wypełnione włókniną hydrofilną (absorbującą wodę), wchłaniają kwasy, rozpuszczalniki,  oleje i substancje ropopochodne oraz  inne substancje ciekłe niezależnie od ich składu chemicznego. Występują w kolorach żółtym
            </Typography>

            <div className={classes.categoryTypes}>
            <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/poduszki-sorbentowe/87-poduszki-sorpcyjne-chemiczne-10-szt-chlonnosc-71-l.html">wymiar 46x46 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/glowna/88-poduszki-sorpcyjne-chemiczne-20-szt-chlonnosc-64-l.html">wymiar 46x23 cm</a>
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
 
export default SocksPillows;