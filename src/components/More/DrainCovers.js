import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper,  Button} from '@material-ui/core';
import RainImage from "./images/raindrops.jpg";
import drainCovers from "./images/drain-covers.png"
import Color from 'color';
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${RainImage})`,
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
  backgroundImage: `url(${drainCovers})`,
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
  width: "20%"
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


const DrainCovers = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                   Os??ony studzienkowe, ograniczniki rozlewu
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/41-oslony-studzienkowe">Os??ony studzienkowe</a>
              </Button>
              s?? cennym dodatkiem do ka??dego zestawu ratunkowego. S?? niezawodne w powstrzymywaniu wyciek??w i rozlew??w przed przedostaniem si?? do wn??trza studzienek. Os??ony posiadaj?? unikaln?? budow?? uretanow??, dzi??ki czemu ??atwo ulegaj?? deformacji co pozwala na dok??adne uszczelnienie otworu studzienki.  Pomi??dzy dwoma warstwami poliuretanu znajduje si?? siatka, kt??ra dodatkowo wzmacnia os??on?? i sprawia, ??e jest bardziej odporna na rozerwania. Obie strony os??ony maj?? takie same w??a??ciwo??ci uszczelniaj??ce. Os??ony s?? odporne na oleje, wod?? i wi??kszo???? agresywnych zwi??zk??w chemicznych. Os??ony s?? wielorazowego u??ytku, nale??y je czy??ci?? wod?? z myd??em.
Posiadamy r??wnie?? w ofercie jednorazowe os??y na studzienki wykonane z poliuretanu wzmacnianego silikonem, kt??re s?? dobrym rozwi??zaniem w przypadku niespodziewanych, jednorazowych wypadk??w.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/41-oslony-studzienkowe">Os??ony jednorazowe</a>
              </Button>
              os??ona studzienkowa (poliuretanowa wzmocniona sylikonem) z klejem od spodu. ??atwa w obs??udze i szybka do na??o??enia na pokryw?? odp??ywu, ??atwa do usuni??cia. Odporna na olej i wi??kszo???? chemikali??w.
            </Typography>
            

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/oslony-studzienkowe/1397-jednorazowa-oslona-na-studzienke-60-x-60-cm.html">wymiar 60x60 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/oslony-studzienkowe/1398-jednorazowa-oslona-na-studzienke-70-x-70-cm.html">wymiar 70x70 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/oslony-studzienkowe/1399-jednorazowa-oslona-na-studzienke-90-x-90-cm.html">wymiar 90x90 cm</a>
                  </Button>

                 
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/41-oslony-studzienkowe">Os??ony wielokrotnego u??ytku</a>
              </Button>
              - niezawodne w powstrzymywaniu wyciek??w i rozlew??w przed przedostaniem si?? do wn??trza studzienek i dok??adnym ich uszczelnieniu. Wyprodukowana z poliuretanu, odporna na oleje, wod?? i wi??kszo???? agresywnych zwi??zk??w chemicznych.
            </Typography>

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/oslony-studzienkowe/1384-oslona-studzienkowa-poliuretanowa-kwadratowa-50cm-x-50m.html">wymiar 50x50 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/oslony-studzienkowe/1381-oslona-na-studzienke-poliuretanowa-kwadratowa-60cm-x-60cm.html">wymiar 60x60 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/oslony-studzienkowe/1315-oslona-na-studzienke-poliuretanowa-kwadratowa-70cm-x-70cm-romold.html">wymiar 70x70 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/oslony-studzienkowe/1385-oslona-na-studzienke-poliuretanowa-kwadratowa-80cm-x-80cm.html">wymiar 80x80 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/oslony-studzienkowe/1314-oslona-na-studzienke-poliuretanowa-kwadratowa-90cm-x-90cm-romold.html">wymiar 90x90 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/oslony-studzienkowe/1386-oslona-na-studzienke-poliuretanowa-kwadratowa-100cm-x-100cm.html">wymiar 100x100 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/oslony-studzienkowe/1401-oslona-na-studzienke-poliuretanowa-kwadratowa-120cm-x-120cm.html">wymiar 120x120 cm</a>
                  </Button>
                 
            </div>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/42-ograniczniki-rozlewu">Ograiczniki rozlewu</a>
              </Button>
              stanowi?? barier?? niezawodn?? w powstrzymywaniu wyciek??w i zatrzymywaniu rozlanej cieczy przed przedostaniem si?? do wn??trza studzienek, kana????w itd. Oferowane przez nas elastyczne bariery ??atwo ulegaj?? deformacji, dzi??ki czemu bez problemu mo??na dostosowa?? ich kszta??t do kszta??tu studzienki.


            </Typography>

            <div className={classes.categoryTypes}>

            <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/ograniczniki-rozlewu/1391-zolta-elastyczna-bariera-poliuretanowa-300-x-7-x-5-cm.html">3m x 5cm x 7cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/ograniczniki-rozlewu/1390-zolta-elastyczna-bariera-poliuretanowa-3-m.html">3m x 7cm x 10cm</a>
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
 
export default DrainCovers;