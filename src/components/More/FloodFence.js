import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper,  Button} from '@material-ui/core';
import WaterImage from "./images/flood.jpg";
import floodFence from "./images/flood-fence.png"
import Color from 'color';
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${WaterImage})`,
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
  backgroundImage: `url(${floodFence})`,
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


const FloodFence = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                   Zapory przeciwpowodziowe
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/91-hydrozapory">Flood fence</a>
              </Button>
              to lekki i szybki w użyciu system kierowania wody. System można szybko podłączyć i wdrożyć. Nie wymaga wcześniejszego nałożenia balastu. Idealny do ochrony przed niespodziewanym zalaniem. Każda jednostka ma wąską uszczelkę podstawową, która umożliwia przywarcie do terenu. Zaleca się stosowanie w trudnych warunkach. Ten system jest idealny do kontrolowania przepływającej wody, na przykład kierowania lub zmiany biegu szkodliwych przepływów. 
              Zastosowania systemu FloodFence ™ obejmują sieć wodociągową i kontrolę odpływu wody powierzchniowej.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zapory-przeciwpowodziowe/1262-zapora-przeciwpowodziowa-flood-fence-jednostka-1m-system-ochrony-przed-powodzia.html">jednostka 1 m</a>
              </Button>
              wykonana z tworzywa ABS, w kolorze czarnym lub żółtym. Pzed użyciem wystarczy połączyć ze soba jednostki. Każda jednostka zawiera uszczelki.
              Każda jednostka Flood Fence ma 0,45 m wysokości i 1,0 m długości. Po podłączeniu do innych jednostek efektywna długość liniowa każdej jednostki wynosi 0,91 m.
            </Typography>
 
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zapory-przeciwpowodziowe/1263-zapora-przeciwpowodziowa-flood-fence-naroznik-system-ochrony-przed-powodzia.html">Narożnik</a>
              </Button>
              pozwala na łączenie jednostek. FloodFence Wewnętrzny i zewnętrzny narożnik
              umożliwia utworzenie barier przeciwpowodziowych o różnych kształtach.
              Połączone dwie jednostki „wewnętrznego narożnika” tworzą „zewnętrzny” narożnik o kącie 90 stopni. Do połączenia dwóch narożnych jednostek niezbędny jest KOŁEK ŁĄCZENIOWY.
            </Typography>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="hhttps://sklep.greenservice.pl/pl/zapory-przeciwpowodziowe/1264-zapora-przeciwpowodziowa-flood-fence-lacznik-scienny-system-ochrony-przed-powodzia.html">Łącznik ścienny</a>
              </Button>
              pozwala na łączenie bariery z powierzchniami pionowymi.
            </Typography>
               
              </div>


      
              
              </Paper>

              <div className={classes.space}></div>

            </Container>

            <Footer />
                   
        </div>
     );
}
 
export default FloodFence;