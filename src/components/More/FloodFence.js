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
              to lekki i szybki w u??yciu system kierowania wody. System mo??na szybko pod????czy?? i wdro??y??. Nie wymaga wcze??niejszego na??o??enia balastu. Idealny do ochrony przed niespodziewanym zalaniem. Ka??da jednostka ma w??sk?? uszczelk?? podstawow??, kt??ra umo??liwia przywarcie do terenu. Zaleca si?? stosowanie w trudnych warunkach. Ten system jest idealny do kontrolowania przep??ywaj??cej wody, na przyk??ad kierowania lub zmiany biegu szkodliwych przep??yw??w. 
              Zastosowania systemu FloodFence ??? obejmuj?? sie?? wodoci??gow?? i kontrol?? odp??ywu wody powierzchniowej.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zapory-przeciwpowodziowe/1262-zapora-przeciwpowodziowa-flood-fence-jednostka-1m-system-ochrony-przed-powodzia.html">jednostka 1 m</a>
              </Button>
              wykonana z tworzywa ABS, w kolorze czarnym lub ??????tym. Pzed u??yciem wystarczy po????czy?? ze soba jednostki. Ka??da jednostka zawiera uszczelki.
              Ka??da jednostka Flood Fence ma 0,45 m wysoko??ci i 1,0 m d??ugo??ci. Po pod????czeniu do innych jednostek efektywna d??ugo???? liniowa ka??dej jednostki wynosi 0,91 m.
            </Typography>
 
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/zapory-przeciwpowodziowe/1263-zapora-przeciwpowodziowa-flood-fence-naroznik-system-ochrony-przed-powodzia.html">Naro??nik</a>
              </Button>
              pozwala na ????czenie jednostek. FloodFence Wewn??trzny i zewn??trzny naro??nik
              umo??liwia utworzenie barier przeciwpowodziowych o r????nych kszta??tach.
              Po????czone dwie jednostki ???wewn??trznego naro??nika??? tworz?? ???zewn??trzny??? naro??nik o k??cie 90 stopni. Do po????czenia dw??ch naro??nych jednostek niezb??dny jest KO??EK ????CZENIOWY.
            </Typography>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="hhttps://sklep.greenservice.pl/pl/zapory-przeciwpowodziowe/1264-zapora-przeciwpowodziowa-flood-fence-lacznik-scienny-system-ochrony-przed-powodzia.html">????cznik ??cienny</a>
              </Button>
              pozwala na ????czenie bariery z powierzchniami pionowymi.
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