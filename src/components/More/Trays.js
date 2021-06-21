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
              Szeroka gama kuwet ociekowych w różnych wariantach i rozmiarach, wanienek wychwytowych pod małe pojemniki, służących do bezpiecznego przechowywania i operowania substancjami niebezpiecznymi. Wykonane z wysokiej gęstości polietylenu – nie rdzewieją, nie ulegają korozji. Tace ociekowe są idealne do przechowywania chemikaliów oraz do zabezpieczania powierzchni przed przypadkowymi rozlaniami. Na dnie kuwet znajdują się przetłoczenia, które zapobiegają rozbryzgowi substancji, dzięki czemu łatwiej utrzymać czystość. Zawinięte szeroko ranty ułatwiają przenoszenie. Bardzo przydatne również przy wyciekach z silników, hydrauliki itp.
            </Typography>
             
             
              <div className={classes.category}>
                  <Typography variant="h6" className={classes.contentTitle}>
                  Kryteria doboru pojemności wychwytu wanny ociekowej
                  </Typography>
                  <Typography variant="body1">
                  Przepisy w Polsce nie określają obowiązkowej pojemności wychwytu wanny. W praktyce na terenie Unii Europejskiej przyjęto normę niemiecką, wskazującą pojemność wychwytu wanny na minimum 10% objętości składowanych w niej substancji lub 100% pojemności największego składowanego pojemnika. Wyjątek stanowi lokalizacja, gdzie może być wymagana pojemność wychwytu 100% składowanych pojemników, np. w obszarach ochrony wód.
                  </Typography>
              </div>

              <div className={classes.category}>
                  <Typography variant="h6" className={classes.contentTitle}>
                  Wanny wychwytowe - Zastosowanie, regulacje, przepisy i podstawy prawne
                  </Typography>
                  <Typography variant="body1">
                  Składowanie substancji niebezpiecznych niesie za sobą ryzyko ich emisji, w związku z czym należy uniemożliwić przedostanie się tych substancji do powietrza, wody i gruntów. Obowiązek ten spoczywa na każdym prowadzącym działalność gospodarczą i ogólnie na każdym, kto substancje takie przechowuje.

                    Podstawowym celem przedsiębiorstw w kwestii bezpiecznego postępowania z substancjami toksycznymi jest właściwa organizacja i eksploatacja miejsca pracy oraz zapewnienie bezpieczeństwa pracujących tam osób. Zakład pracy powinien być przystosowany do obowiązujących wymagań bhp i ppoż. dotyczących magazynowania i transportowania materiałów niebezpiecznych.
                    W Polsce podstawę prawną stanowią:
                    <ul className={classes.list}>
                        <li>Ustawa z dnia 25 lutego 2011 r. o substancjach chemicznych i ich mieszaninach</li>
                        <li>Ustawa z dnia 27 kwietnia 2001 r. - Prawo ochrony środowiska (tekst jedn.: Dz. U. z 2013 r. poz. 1232 z późn. zm.)</li>
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