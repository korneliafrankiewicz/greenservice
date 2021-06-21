import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper,  Button} from '@material-ui/core';
import SpillKitsImage from "./images/spill-kits.jpg";
import spillKits from "./images/spill-kits.png"
import Color from 'color';
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${SpillKitsImage})`,
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
  backgroundImage: `url(${spillKits})`,
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


const SpillKits = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                    Zestawy awaryjne
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/22-zestawy-awaryjne-do-usuwania-wyciekow">Zestawy ratunkowe</a>
              </Button>
            (awaryjne) stanowią komplet środków niezbędnych do usunięcia wycieku. Oferowane zestawy w różnych konfiguracjach obejmują maty, granulat, poduszki, rękawy, artykuły ochrony osobistej, masę uszczelniającą, preparaty do usunięcia odpadów i zabrudzeń.  Zestawy znajdujące się w obszarach o podwyższonym ryzyku podnoszą bezpieczeństwo pracy ludzi oraz chronią majątek firmy. Oferujemy standardowe zestawy od 16 do 280 litrów chłonności, a także tworzymy dowolne konfiguracje.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/48-zestawy-sorpcyjne-uniwersalne">Zestawy uniwersalne</a>
              </Button>
               to komplet sorbentów wchłaniających wodę, płyny przemysłowe, oleje, produkty ropopochodne i nieagresywne chemikalia. Sorpcyjne zestawy awaryjne stanowią niezbędne wyposażenie miejsc podatnych na występowanie częstych wycieków wszelkiego rodzaju substancji płynnych. Stosowane w laboratoriach, na magazynach, w halach produkcyjnych, warsztatach, pojazdach serwisowych, łodziach itp. zwiększają bezpieczeństwo i kontrolę nad rozlanymi substancjami. Zestawy zawierają wysokiej klasy sorbent polipropylenowy koloru szarego i w zależności od modelu dodatkowe elementy wyposażenia.
            </Typography>
            

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zestawy-sorpcyjne-uniwersalne/371-zestaw-ratunkowy-uniwersalny-eko-u17-chlonnosc-18-l.html">chłonność 17 l</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zestawy-sorpcyjne-olejowe/375-zestaw-ratunkowy-olejowy-eko-o30-chlonnosc-31-l.html">chłonność 31 l</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zestawy-sorpcyjne-olejowe/378-zestaw-ratunkowy-olejowy-eko-o120-chlonnosc-85-l.html">chłonność 84 l</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zestawy-sorpcyjne-olejowe/386-zestaw-ratunkowy-olejowy-eko-o240-chlonnosc-234-l.html">chłonność 234 l</a>
                  </Button>


                 
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/49-zestawy-sorpcyjne-olejowe">Zestawy olejowe</a>
              </Button>
              pochłaniające olej to kombinacje bardzo chłonnych sorbentów gotowych do natychmiastowego użycia w przypadku wystąpienia niebezpiecznego wycieku. Sorbenty olejowe wykorzystywane w sytuacjach kryzysowych związanych z wyciekami płynnych substancji ropopochodnych działają optymalnie i pochłaniają oleje, nie wchłaniając wody. Zestawy awaryjne do oleju wyposażone są w wysokiej klasy hydrofobowy sorbent polipropylenowy koloru białego oraz pozostałe elementy pomocnicze.
            </Typography>

            <div className={classes.categoryTypes}>
                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zestawy-sorpcyjne-olejowe/372-zestaw-ratunkowy-olejowy-eko-o17-chlonnosc-17-l.html">chłonność 17 l</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zestawy-sorpcyjne-uniwersalne/374-zestaw-ratunkowy-uniwersalny-eko-u30-chlonnosc-30-l.html">chłonność 30 l</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zestawy-sorpcyjne-uniwersalne/377-zestaw-ratunkowy-uniwersalny-eko-u120-chlonnosc-96-l.html">chłonność 96 l</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zestawy-sorpcyjne-uniwersalne/380-zestaw-ratunkowy-uniwersalny-eko-u240-chlonnosc-240-l.html">chłonność 240 l</a>
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



              


      
              
              </Paper>

              <div className={classes.space}></div>

            </Container>

            <Footer />
                   
        </div>
     );
}
 
export default SpillKits;