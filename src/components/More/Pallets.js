import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Button} from '@material-ui/core';
import SpillPalletImage from "./images/spill-pallet.jpg";
import spillPallets from "./images/spill-pallets.png";
import Color from 'color';
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${SpillPalletImage})`,
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
  backgroundImage: `url(${spillPallets})`,
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


const Pallets = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                    Wanny wychwytowe
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/61-wanny-wychwytowe-z-tworzywa">Wanna wychwytowa</a>
              </Button>
               nazywana także wanną ociekową, jest kontenerem, w którym może gromadzić się płynna substancja, na skutek ociekania z nieszczelnego pojemnika znajdującego się w wannie, nad wanną lub na ruszcie kratowym wanny będącym elementem instalacji. Wanna ma za zadanie wyłapać (wychwycić) wyciekającą treść z uszkodzonego pojemnika, tak aby nie przedostała się ona do środowiska. Wanna ociekowa stanowi dodatkowe zabezpieczenie w sytuacji gdy pojemnik z cieczą niebezpieczna okazałby się lub został uszkodzony. Wanna wychwytowa stosowana jest w fabrykach, warsztatach, laboratoriach i wszędzie gdzie występuje ryzyko związane z nagromadzeniem niebezpiecznych płynów. 
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#/rodzaj_sorbenty_pp-uniwersalne">Wanny wychwytowe pod beczki</a>
              </Button>
               - przyjazne dla środowiska wanny wychwytowe z tworzywa stanowią doskonałe rozwiązanie problemów przy składowaniu cieczy niebezpiecznych(kwasy, oleje). Wanny wychwytowe pod beczki charakteryzują się odpornością mechaniczną, a także bardzo dużą odpornością na działanie agresywnych chemikaliów. Nieco innym rozwiązaniem kwestii składowania beczek może być użycie metalowych wanien ociekowych, które przeznaczone są głownie do składowania substancji silnie żrących. Natomiast do pracy w terenie najwygodniej jest stosować wanny wychwytowe składane. Przenośna wanna pod beczkę umożliwia sprawne obchodzenie się z niebezpiecznym materiałem w terenie. 
            </Typography>
            

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/61-wanny-wychwytowe-z-tworzywa#/ilosc_beczek-1">na 1 beczkę</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/61-wanny-wychwytowe-z-tworzywa#/ilosc_beczek-2">na 2 beczki</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/61-wanny-wychwytowe-z-tworzywa#/ilosc_beczek-4">na 4 beczki</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/61-wanny-wychwytowe-z-tworzywa#/ilosc_beczek-6">na 6 beczek</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/61-wanny-wychwytowe-z-tworzywa#/ilosc_beczek-8">na 8 beczek</a>
                  </Button>

                 
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/61-wanny-wychwytowe-z-tworzywa#/ilosc_beczek-1_pojemnik_ibc-2_pojemniki_ibc-4_pojemniki_ibc">Wanny wychwytowe pod pojemniki IBC</a>
              </Button>
              wanny o ogromnej pojemności i bardzo dużej nośności – umożliwiają bezpieczne i zgodne z przepisami składowanie pojemników IBC. Waanny ociekowe do przechowywania kontenera IBC/KTC z substancjami szkodliwymi dla środowiska (oleje, rozpuszczalniki i inne niebezpieczne chemikalia, włącznie z substancjami najbardziej agresywnymi). 
            </Typography>

            <div className={classes.categoryTypes}>
            <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/61-wanny-wychwytowe-z-tworzywa#/ilosc_beczek-1_pojemnik_ibc">na 1 pojemnik IBC</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/61-wanny-wychwytowe-z-tworzywa#/ilosc_beczek-2_pojemniki_ibc">na 2 pojemniki IBC</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/61-wanny-wychwytowe-z-tworzywa#/ilosc_beczek-4_pojemniki_ibc">na 4 pojemniki IBC</a>
                  </Button>

            </div>
               
              </div>

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
 
export default Pallets;