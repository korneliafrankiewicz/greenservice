import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper,  Button} from '@material-ui/core';
import GeneticImage from "./images/genetic.jpg";
import stickyMatsImg from "./images/sticky-mats.png"
import Color from 'color';
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${GeneticImage})`,
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
  backgroundImage: `url(${stickyMatsImg})`,
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


const StickyMats = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                  Maty biobójcze i dekontaminacyjne
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/80-maty-samoprzylepne-sticky-mats">Maty samoprzylepne</a>
              </Button>
                tzw. STICKY MATS to dekontaminacyjne i bakteriobójcze maty do czyszczenia i zapewnienia higieny w szczególnie chronionych obszarach przejścia, zarówno pieszych jak i wózków,  niezbędne dla utrzymania bezpieczeństwa środowisk, w których prowadzone są działania pielęgnacyjne. Rozwiązanie dedykowane placówkom i miejscom takim jak: szpitale, przychodnie, domy opieki, pomieszczenia sanitarne, farmaceutyczne, związane z branżą medyczną, laboratoria, fermy hodowlane. Maty podnoszą bezpieczeństwo i higienę w strefach produkcyjnych i magazynowych w przemyśle spożywczym, elektrotechnicznym, chemicznym, i w wielu innych. 
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/151-maty-dekontaminacyjne">Maty dekontaminacyjne</a>
              </Button>
              to samoprzylepne maty odkażające dla służby zdrowia, przemysłu spożywczego i energetyki (stosowane przy wejściach do sal operacyjnych, oddziałach anestezjologii i reanimacji, oddziałach intensywnej terapii, hurtowniach gastronomicznych, laboratoriach itp.). 
              Samoprzylepne maty dekontaminacyjne hamują rozprzestrzenianie się mikrobów w strefach objętych szczególną ochroną. Stanowią aktywną powierzchnię antybakteryjną uniemożliwiającą wzrost i rozmnażanie się drobnoustrojów w pomieszczeniach wymagających utrzymania wysokiej higieny. Patogeny, takie jak bakterie, wirusy i grzyby wraz z innymi zabrudzeniami z podeszw butów i kół wózków, zatrzymywane są na macie i nie przedostają się dalej do chronionego pomieszczenia.
            </Typography>
            

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-samoprzylepne-sticky-mats/915-mata-dekontaminacyjna-samoprzylepna-40cm-x-55cm.html">wymiar 40x55 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-samoprzylepne-sticky-mats/916-mata-dekontaminacyjna-samoprzylepna-45cm-x-90cm.html">wymiar 45x90 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-samoprzylepne-sticky-mats/1153-mata-dekontaminacyjna-samoprzylepna-45cm-x-115cm.html">wymiar 45x115 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-samoprzylepne-sticky-mats/917-mata-dekontaminacyjna-samoprzylepna-60cm-x-90cm.html">wymiar 60x90 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-samoprzylepne-sticky-mats/918-mata-dekontaminacyjna-samoprzylepna-60cm-x-115cm.html">wymiar 60x115 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-samoprzylepne-sticky-mats/919-mata-dekontaminacyjna-samoprzylepna-90cm-x-115cm.html">wymiar 90x115 cm</a>
                  </Button>
                 
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#/rodzaj_sorbenty_pp-olejowe_hydrofobowe">Maty biobójcze</a>
              </Button>
              antybakteryjne dezynfekujące zatrzymują i zabijają mikroby zapewniając ochronę przed rozprzestrzenianiem się niebezpiecznych patogenów takich jak bakterie, grzyby czy wirusy. Antybakteryjny klej na  powierzchni mat niebieskich(CBS Medical) zawiera środek niszczący drobnoustroje - BIOMASTER, którego substancją czynną jest 5 % roztwór benzizotiazolin 3-1, natomiast w przypadkui mat białych(Sanimat) substancją aktywną, niszczącą drobnoustroje jest 2-n-octyl-4-isothiazolin.
            </Typography>

            <div className={classes.categoryTypes}>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-samoprzylepne-sticky-mats/565-mata-bakteriobojcza-sticky-90cm-x-45cm-niebieska-antybakteryjna.html">wymiar 45x90 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-samoprzylepne-sticky-mats/560-mata-bakteriobojcza-sticky-45cm-x-115cm-niebieska-antybakteryjna.html">wymiar 45x115 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-samoprzylepne-sticky-mats/567-mata-biobojcza-sticky-60cm-x-90cm-niebieska-antybakteryjna.html">wymiar 60x90 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-samoprzylepne-sticky-mats/562-mata-biobojcza-sticky-60cm-x-115cm-niebieska-antybakteryjna.html">wymiar 60x115 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-samoprzylepne-sticky-mats/563-mata-bakteriobojcza-sticky-90cm-x-115cm-niebieska-antybakteryjna.html">wymiar 90x115 cm</a>
                  </Button>
                 
            </div>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/155-maty-wejsciowe-biobojcze">Maty wejściowe</a>
              </Button>
              - biobójcze maty wejściowe umożliwiają dokładne dwuetapowe pozbycie się nieczystości przed wejściem do pomieszczeń podlegających szczególnej ochronie sanitarnej. Rozwiązanie dedykowane szpitalom, placówkom medycznym, laboratoriom, centrom diagnostycznym, sektorom z branży spożywczej i usługowej, administratorom obiektów sportowo-rekreacyjnych, biurom i wszystkim mającym na celu utrzymanie wysokiego standardu bezpieczeństwa sanitarno-higienicznego. Wycieraczka nasączana preparatem biobójczym lub połączona w zestawie z matą dekontaminacyjną zbiera większe nieczystości z obuwia i zatrzymuje patogeny zmniejszając możliwość przenoszenie ich do strefy chronionej.
            </Typography>

        
               
              </div>



              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/153-maty-zmywalne-biobojcze-dekontaminacyjne">Maty zmywalne</a>
              </Button>
              pomagają skutecznie zabezpieczyć wejścia i pomieszczenia przed roznoszeniem i przedostaniem się do szczególnie chronionych miejsc bakterii, wirusów i grzybów. Maty zmywalne zatrzymują i usuwają zabrudzenia z podeszw butów i kół wózków, stanowią solidną barierę przeciw patogenom blokując im możliwość wzrostu i rozmnażania. Maty wielokrotnego użytku stosuje się dla zwiększenia bezpieczeństwa sanitarnego w szpitalach, w sektorze przemysłu elektrotechnicznego, spożywczego, chemicznego i innych.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/166-maty-dekontaminacyjne-zmywalne">Maty dekontaminacyjne</a>
              </Button>
              wielokrotnego użytku usuwają większe zabrudzenia z podeszw butów i kół wózków oraz zatrzymują pasożyty i wszelkie mikroorganizmy przed przedostaniem się do stref objętych szczególną ochrona sanitarno-higieniczną. Stanowią solidną barierę przeciw patogenom blokując im możliwość rozprzestrzeniania się. Stosowane w środowisku medycznym, w przemyśle spożywczym, farmaceutycznym, chemicznym, elektrotechnicznym i wszędzie gdzie wymagana jest większa aktywność w zakresie działań higienicznych.
            </Typography>
            

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-zmywalne-biobojcze-dekontaminacyjne/1160-zmywalna-mata-dekontaminacyjna-40cm-x-60cm-biala.html">wymiar 40x60 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-zmywalne-biobojcze-dekontaminacyjne/971-zmywalna-mata-dekontaminacyjna-40cm-x-80cm-biala.html">wymiar 40x80 cm</a>
                  </Button>
                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-zmywalne-biobojcze-dekontaminacyjne/921-zmywalna-mata-dekontaminacyjna-60cm-x-80cm-biala.html">wymiar 60x80 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-zmywalne-biobojcze-dekontaminacyjne/920-zmywalna-mata-dekontaminacyjna-60cm-x-100cm-biala.html">wymiar 60x100 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-zmywalne-biobojcze-dekontaminacyjne/1415-zmywalna-mata-dekontaminacyjna-60cm-x-120cm-biala.html">wymiar 60x120 cm</a>
                  </Button>
                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-zmywalne-biobojcze-dekontaminacyjne/922-zmywalna-mata-dekontaminacyjna-80cm-x-120cm-biala.html">wymiar 80x120 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-zmywalne-biobojcze-dekontaminacyjne/970-zmywalna-mata-dekontaminacyjna-80cm-x-160cm-biala.html">wymiar 80x160 cm</a>
                  </Button>
                  
                  



                 
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/167-maty-biobojcze-zmywalne">Maty biobócze</a>
              </Button>
              wielokrotnego użytku usuwają zanieczyszczenia z podeszw butów i kół wózków oraz przechwytują i neutralizują na swojej powierzchni mikroby naniesione przez przechodzących. Niebieskie maty zmywalne nie potrzebują dodatkowego nasączania bakteriobójczymi preparatami. Po odpowiednim umyciu wciąż pozostają czynne antybakteryjnie zachowując swoje właściwości biobójcze. Stosowanie biobójczych mat hamuje rozwój wirusów, bakterii i grzybów oraz blokuje im możliwość przedostania się na teren objęty ochroną. Stosowane w środowisku medycznym, w laboratoriach i centrach diagnostycznych, w przemyśle spożywczym, chemicznym, elektrotechnicznym i wszędzie tam gdzie obowiązują wysokie standardy bezpieczeństwa sanitarno-higienicznego.
            </Typography>

            <div className={classes.categoryTypes}>
            <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-zmywalne-biobojcze-dekontaminacyjne/925-zmywalna-mata-biobojcza-60cm-x-80cm-niebieska.html">wymiar 60x80 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-zmywalne-biobojcze-dekontaminacyjne/923-zmywalna-mata-biobojcza-60cm-x-100cm-niebieska.html">wymiar 60x100 cm</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/maty-zmywalne-biobojcze-dekontaminacyjne/926-zmywalna-mata-bakteriobojcza-80cm-x-120cm-niebieska.html">wymiar 80x120 cm</a>
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
 
export default StickyMats;