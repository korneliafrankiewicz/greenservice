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
               nazywana tak??e wann?? ociekow??, jest kontenerem, w kt??rym mo??e gromadzi?? si?? p??ynna substancja, na skutek ociekania z nieszczelnego pojemnika znajduj??cego si?? w wannie, nad wann?? lub na ruszcie kratowym wanny b??d??cym elementem instalacji. Wanna ma za zadanie wy??apa?? (wychwyci??) wyciekaj??c?? tre???? z uszkodzonego pojemnika, tak aby nie przedosta??a si?? ona do ??rodowiska. Wanna ociekowa stanowi dodatkowe zabezpieczenie w sytuacji gdy pojemnik z ciecz?? niebezpieczna okaza??by si?? lub zosta?? uszkodzony. Wanna wychwytowa stosowana jest w fabrykach, warsztatach, laboratoriach i wsz??dzie gdzie wyst??puje ryzyko zwi??zane z nagromadzeniem niebezpiecznych p??yn??w. 
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#/rodzaj_sorbenty_pp-uniwersalne">Wanny wychwytowe pod beczki</a>
              </Button>
               - przyjazne dla ??rodowiska wanny wychwytowe z tworzywa stanowi?? doskona??e rozwi??zanie problem??w przy sk??adowaniu cieczy niebezpiecznych(kwasy, oleje). Wanny wychwytowe pod beczki charakteryzuj?? si?? odporno??ci?? mechaniczn??, a tak??e bardzo du???? odporno??ci?? na dzia??anie agresywnych chemikali??w. Nieco innym rozwi??zaniem kwestii sk??adowania beczek mo??e by?? u??ycie metalowych wanien ociekowych, kt??re przeznaczone s?? g??ownie do sk??adowania substancji silnie ??r??cych. Natomiast do pracy w terenie najwygodniej jest stosowa?? wanny wychwytowe sk??adane. Przeno??na wanna pod beczk?? umo??liwia sprawne obchodzenie si?? z niebezpiecznym materia??em w terenie. 
            </Typography>
            

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/61-wanny-wychwytowe-z-tworzywa#/ilosc_beczek-1">na 1 beczk??</a>
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
              wanny o ogromnej pojemno??ci i bardzo du??ej no??no??ci ??? umo??liwiaj?? bezpieczne i zgodne z przepisami sk??adowanie pojemnik??w IBC. Waanny ociekowe do przechowywania kontenera IBC/KTC z substancjami szkodliwymi dla ??rodowiska (oleje, rozpuszczalniki i inne niebezpieczne chemikalia, w????cznie z substancjami najbardziej agresywnymi). 
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
 
export default Pallets;