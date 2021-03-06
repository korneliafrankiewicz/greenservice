import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Button} from '@material-ui/core';
import SpillTrayImage from "./images/spill-trays.jpg";
import spillTrays from "./images/spill-trays.png";
import Color from 'color';
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${SpillTrayImage})`,
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
  backgroundImage: `url(${spillTrays})`,
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


contentTitle: {
fontWeight: "bold",
},


space: {
  height: "60px",
  width: "100%",
}

    
  }));


const Trays = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                    Kuwety i tace ociekowe
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/86-wanny-na-male-pojemniki">Kuwety ociekowe</a>
              </Button>
              Szeroka gama kuwet ociekowych w r????nych wariantach i rozmiarach, wanienek wychwytowych pod ma??e pojemniki, s??u????cych do bezpiecznego przechowywania i operowania substancjami niebezpiecznymi. Wykonane z wysokiej g??sto??ci polietylenu ??? nie rdzewiej??, nie ulegaj?? korozji. Tace ociekowe s?? idealne do przechowywania chemikali??w oraz do zabezpieczania powierzchni przed przypadkowymi rozlaniami. Na dnie kuwet znajduj?? si?? przet??oczenia, kt??re zapobiegaj?? rozbryzgowi substancji, dzi??ki czemu ??atwiej utrzyma?? czysto????. Zawini??te szeroko ranty u??atwiaj?? przenoszenie. Bardzo przydatne r??wnie?? przy wyciekach z silnik??w, hydrauliki itp.
            </Typography>
             
             
              <div className={classes.category}>
                  <Typography variant="h6" className={classes.contentTitle}>
                  Kryteria doboru pojemno??ci wychwytu wanny ociekowej
                  </Typography>
                  <Typography variant="body1">
                  Przepisy w Polsce nie okre??laj?? obowi??zkowej pojemno??ci wychwytu wanny. W praktyce na terenie Unii Europejskiej przyj??to norm?? niemieck??, wskazuj??c?? pojemno???? wychwytu wanny na minimum 10% obj??to??ci sk??adowanych w niej substancji lub 100% pojemno??ci najwi??kszego sk??adowanego pojemnika. Wyj??tek stanowi lokalizacja, gdzie mo??e by?? wymagana pojemno???? wychwytu 100% sk??adowanych pojemnik??w, np. w obszarach ochrony w??d.
                  </Typography>
              </div>

              <div className={classes.category}>
                  <Typography variant="h6" className={classes.contentTitle}>
                  Wanny wychwytowe - Zastosowanie, regulacje, przepisy i podstawy prawne
                  </Typography>
                  <Typography variant="body1">
                  Sk??adowanie substancji niebezpiecznych niesie za sob?? ryzyko ich emisji, w zwi??zku z czym nale??y uniemo??liwi?? przedostanie si?? tych substancji do powietrza, wody i grunt??w. Obowi??zek ten spoczywa na ka??dym prowadz??cym dzia??alno???? gospodarcz?? i og??lnie na ka??dym, kto substancje takie przechowuje.

                    Podstawowym celem przedsi??biorstw w kwestii bezpiecznego post??powania z substancjami toksycznymi jest w??a??ciwa organizacja i eksploatacja miejsca pracy oraz zapewnienie bezpiecze??stwa pracuj??cych tam os??b. Zak??ad pracy powinien by?? przystosowany do obowi??zuj??cych wymaga?? bhp i ppo??. dotycz??cych magazynowania i transportowania materia????w niebezpiecznych.
                    W Polsce podstaw?? prawn?? stanowi??:
                    <ul className={classes.list}>
                        <li>Ustawa z dnia 25 lutego 2011 r. o substancjach chemicznych i ich mieszaninach</li>
                        <li>Ustawa z dnia 27 kwietnia 2001 r. - Prawo ochrony ??rodowiska (tekst jedn.: Dz. U. z 2013 r. poz. 1232 z p????n. zm.)</li>
                        <li>Ustawa z dnia 18 lipca 2001 r. Prawo wodne</li>
                        <li>Dyrektywy akty prawne UE</li>
                   
                    </ul>
                 
                  </Typography>
              </div>



             



              
      
              
              </Paper>

              <div className={classes.space}></div>

            </Container>

            <Footer />
                   
        </div>
     );
}
 
export default Trays;