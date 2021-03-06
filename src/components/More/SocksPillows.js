import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper,  Button} from '@material-ui/core';
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


const SocksPillows = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                    Poduszki i r??kawy
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#">R??kawy sorpcyjne</a>
              </Button>
              s??u???? do tamowania wyciek??w, zbierania p??yn??w wyciekaj??cych z maszyn, beczek, zbiornik??w, zawor??w itp., a w przypadku awarii do ograniczenia obszaru zagro??onego wyciekiem.  S?? uszyte z mocnego materia??u, nape??nione bardzo ch??onn?? w????knin?? absorbuj??c??. Mo??na je dowolnie kszta??towa?? u??ywaj??c w ciasnych, trudno dost??pnych miejscach. Wykorzystywane s?? r??wnie?? przy wyciekach wzd??u??nych, doskonale sprawdzaj?? si?? do ochrony chodnik??w, linii produkcyjnych oraz wej????.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#/rodzaj_sorbenty_pp-uniwersalne">R??kawy uniwersalne</a>
              </Button>
              og??lnego zastosowania ??? s?? przystosowane do absorpcji substancji nieagresywnych. Wype??nione w????knin?? hydrofiln?? (absorbuj??c?? wod??) wch??aniaj??  p??yny przemys??owe, ch??odz??co-smaruj??ce i hydrauliczne, ciecze ropopochodne, oleje, glikole, wod?? itp. Wyst??puj?? w kolorze szarym.
            </Typography>
            

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/70-rekawy-sorpcyjne-uniwersalne-30-szt-chlonnosc-95-l.html">d??ugo???? 1,2 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/71-rekawy-sorpcyjne-uniwersalne-15-szt-chlonnosc-95-l.html">d??ugo???? 2,4 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/72-rekawy-sorpcyjne-uniwersalne-10-szt-chlonnosc-95-l.html">d??ogo???? 3,6 m</a>
                  </Button>

                 
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#/rodzaj_sorbenty_pp-olejowe_hydrofobowe">R??kawy olejowe</a>
              </Button>
              zatrzymuj?? oraz ch??on?? wszystkie oleje i substancje ropopochodne.  S?? wype??nione w????knin?? hydrofobow?? (odpychaj??c?? wod??).  Z uwagi na w??a??ciwo??ci odpychaj??ce wod??, doskonale nadaj?? si?? do usuwania zanieczyszcze?? z powierzchni w??d p??yn??cych, stoj??cych i ??ciek??w ???  nawet po wch??oni??ciu maksymalnej ilo??ci oleju unosz?? si?? na powierzchni wody.
            </Typography>

            <div className={classes.categoryTypes}>
            <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/572-rekawy-sorpcyjne-olejowe-dl-12m-20-szt-chlonnosc-635-l.htmla">d??ugo???? 1,2 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/508-rekawy-sorpcyjne-olejowe-10-szt-chlonnosc-64-l.html">d??ugo???? 2,4 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/509-rekawy-sorbentowe-olejowe-5-szt-chlonnosc-47-l.html">d??ogo???? 3,6 m</a>
                  </Button>

            </div>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#/rodzaj_sorbenty_pp-chemiczne">R??kawy chemiczne</a>
              </Button>
              s?? przystosowane do absorpcji agresywnych substancji. Wype??nione w????knin?? hydrofiln?? (absorbuj??c?? wod??), wch??aniaj?? kwasy, rozpuszczalniki,  oleje i substancje ropopochodne oraz  inne substancje ciek??e niezale??nie od ich sk??adu chemicznego. Wyst??puj?? w kolorach ??????tym
            </Typography>

            <div className={classes.categoryTypes}>

            <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/80-rekawy-sorpcyjne-chemiczne-30-szt-chlonnosc-95-l.html">d??ugo???? 1,2 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/522-rekawy-sorpcyjne-chemiczne-dl-24m-10-szt-chlonnosc-64-l.html">d??ugo???? 2,4 m</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/rekawy-sorpcyjne/523-rekawy-sorpcyjne-chemiczne-dl-36m-5-szt-chlonnosc-45-l.html">d??ogo???? 3,6 m</a>
                  </Button>


            </div>
               
              </div>



              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/210-poduszki-sorbentowe">Poduszki sorpcyjne</a>
              </Button>
              s?? idealnym rozwi??zaniem do poch??aniania du??ych, punktowych wyciek??w doskonale nadaj?? si?? do podk??adania przy naprawach i czynno??ciach obs??ugowych. Stosuje si?? je jako element wymienny w pojemnikach, kt??re gromadz?? r????nego rodzaju wycieki z nieszczelnych zawor??w i przewod??w. Dzi??ki elastycznej formie s?? idealnym rozwi??zaniem do miejsc trudno dost??pnych. S?? uszyte z mocnego materia??u, nape??nione bardzo ch??onn?? w????knin?? absorbuj??c??. Pozwalaj?? unikn???? rozbryzg??w, pozostawiaj??c powierzchni?? sucha i czyst?? Wyst??puj?? w kolorze szarym.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/210-poduszki-sorbentowe#/rodzaj_sorbenty_pp-uniwersalne">Poduszki uniwersalne</a>
              </Button>
              og??lnego zastosowania ??? s?? przystosowane do absorpcji substancji nieagresywnych. Wype??nione w????knin?? hydrofiln?? (absorbuj??c?? wod??) wch??aniaj??  p??yny przemys??owe, ch??odz??co-smaruj??ce i hydrauliczne, ciecze ropopochodne, oleje, glikole, wod?? itp. Wyst??puj?? w kolorze szarym.
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
              zatrzymuj?? oraz ch??on?? wszystkie oleje i substancje ropopochodne.  S?? wype??nione w????knin?? hydrofobow?? (odpychaj??c?? wod??).  Z uwagi na w??a??ciwo??ci odpychaj??ce wod??, doskonale nadaj?? si?? do usuwania zanieczyszcze?? z powierzchni w??d p??yn??cych, stoj??cych i ??ciek??w ???  nawet po wch??oni??ciu maksymalnej ilo??ci oleju unosz?? si?? na powierzchni wody.
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
              s?? przystosowane do absorpcji agresywnych substancji. Wype??nione w????knin?? hydrofiln?? (absorbuj??c?? wod??), wch??aniaj?? kwasy, rozpuszczalniki,  oleje i substancje ropopochodne oraz  inne substancje ciek??e niezale??nie od ich sk??adu chemicznego. Wyst??puj?? w kolorach ??????tym
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