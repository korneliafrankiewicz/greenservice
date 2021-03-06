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
                  Maty biob??jcze i dekontaminacyjne
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/80-maty-samoprzylepne-sticky-mats">Maty samoprzylepne</a>
              </Button>
                tzw. STICKY MATS to dekontaminacyjne i bakteriob??jcze maty do czyszczenia i zapewnienia higieny w szczeg??lnie chronionych obszarach przej??cia, zar??wno pieszych jak i w??zk??w,  niezb??dne dla utrzymania bezpiecze??stwa ??rodowisk, w kt??rych prowadzone s?? dzia??ania piel??gnacyjne. Rozwi??zanie dedykowane plac??wkom i miejscom takim jak: szpitale, przychodnie, domy opieki, pomieszczenia sanitarne, farmaceutyczne, zwi??zane z bran???? medyczn??, laboratoria, fermy hodowlane. Maty podnosz?? bezpiecze??stwo i higien?? w strefach produkcyjnych i magazynowych w przemy??le spo??ywczym, elektrotechnicznym, chemicznym, i w wielu innych. 
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/151-maty-dekontaminacyjne">Maty dekontaminacyjne</a>
              </Button>
              to samoprzylepne maty odka??aj??ce dla s??u??by zdrowia, przemys??u spo??ywczego i energetyki (stosowane przy wej??ciach do sal operacyjnych, oddzia??ach anestezjologii i reanimacji, oddzia??ach intensywnej terapii, hurtowniach gastronomicznych, laboratoriach itp.). 
              Samoprzylepne maty dekontaminacyjne hamuj?? rozprzestrzenianie si?? mikrob??w w strefach obj??tych szczeg??ln?? ochron??. Stanowi?? aktywn?? powierzchni?? antybakteryjn?? uniemo??liwiaj??c?? wzrost i rozmna??anie si?? drobnoustroj??w w pomieszczeniach wymagaj??cych utrzymania wysokiej higieny. Patogeny, takie jak bakterie, wirusy i grzyby wraz z innymi zabrudzeniami z podeszw but??w i k???? w??zk??w, zatrzymywane s?? na macie i nie przedostaj?? si?? dalej do chronionego pomieszczenia.
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
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/209-rekawy-sorpcyjne#/rodzaj_sorbenty_pp-olejowe_hydrofobowe">Maty biob??jcze</a>
              </Button>
              antybakteryjne dezynfekuj??ce zatrzymuj?? i zabijaj?? mikroby zapewniaj??c ochron?? przed rozprzestrzenianiem si?? niebezpiecznych patogen??w takich jak bakterie, grzyby czy wirusy. Antybakteryjny klej na  powierzchni mat niebieskich(CBS Medical) zawiera ??rodek niszcz??cy drobnoustroje - BIOMASTER, kt??rego substancj?? czynn?? jest 5 % roztw??r benzizotiazolin 3-1, natomiast w przypadkui mat bia??ych(Sanimat) substancj?? aktywn??, niszcz??c?? drobnoustroje jest 2-n-octyl-4-isothiazolin.
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
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/155-maty-wejsciowe-biobojcze">Maty wej??ciowe</a>
              </Button>
              - biob??jcze maty wej??ciowe umo??liwiaj?? dok??adne dwuetapowe pozbycie si?? nieczysto??ci przed wej??ciem do pomieszcze?? podlegaj??cych szczeg??lnej ochronie sanitarnej. Rozwi??zanie dedykowane szpitalom, plac??wkom medycznym, laboratoriom, centrom diagnostycznym, sektorom z bran??y spo??ywczej i us??ugowej, administratorom obiekt??w sportowo-rekreacyjnych, biurom i wszystkim maj??cym na celu utrzymanie wysokiego standardu bezpiecze??stwa sanitarno-higienicznego. Wycieraczka nas??czana preparatem biob??jczym lub po????czona w zestawie z mat?? dekontaminacyjn?? zbiera wi??ksze nieczysto??ci z obuwia i zatrzymuje patogeny zmniejszaj??c mo??liwo???? przenoszenie ich do strefy chronionej.
            </Typography>

        
               
              </div>



              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/153-maty-zmywalne-biobojcze-dekontaminacyjne">Maty zmywalne</a>
              </Button>
              pomagaj?? skutecznie zabezpieczy?? wej??cia i pomieszczenia przed roznoszeniem i przedostaniem si?? do szczeg??lnie chronionych miejsc bakterii, wirus??w i grzyb??w. Maty zmywalne zatrzymuj?? i usuwaj?? zabrudzenia z podeszw but??w i k???? w??zk??w, stanowi?? solidn?? barier?? przeciw patogenom blokuj??c im mo??liwo???? wzrostu i rozmna??ania. Maty wielokrotnego u??ytku stosuje si?? dla zwi??kszenia bezpiecze??stwa sanitarnego w szpitalach, w sektorze przemys??u elektrotechnicznego, spo??ywczego, chemicznego i innych.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/166-maty-dekontaminacyjne-zmywalne">Maty dekontaminacyjne</a>
              </Button>
              wielokrotnego u??ytku usuwaj?? wi??ksze zabrudzenia z podeszw but??w i k???? w??zk??w oraz zatrzymuj?? paso??yty i wszelkie mikroorganizmy przed przedostaniem si?? do stref obj??tych szczeg??ln?? ochrona sanitarno-higieniczn??. Stanowi?? solidn?? barier?? przeciw patogenom blokuj??c im mo??liwo???? rozprzestrzeniania si??. Stosowane w ??rodowisku medycznym, w przemy??le spo??ywczym, farmaceutycznym, chemicznym, elektrotechnicznym i wsz??dzie gdzie wymagana jest wi??ksza aktywno???? w zakresie dzia??a?? higienicznych.
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
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/167-maty-biobojcze-zmywalne">Maty biob??cze</a>
              </Button>
              wielokrotnego u??ytku usuwaj?? zanieczyszczenia z podeszw but??w i k???? w??zk??w oraz przechwytuj?? i neutralizuj?? na swojej powierzchni mikroby naniesione przez przechodz??cych. Niebieskie maty zmywalne nie potrzebuj?? dodatkowego nas??czania bakteriob??jczymi preparatami. Po odpowiednim umyciu wci???? pozostaj?? czynne antybakteryjnie zachowuj??c swoje w??a??ciwo??ci biob??jcze. Stosowanie biob??jczych mat hamuje rozw??j wirus??w, bakterii i grzyb??w oraz blokuje im mo??liwo???? przedostania si?? na teren obj??ty ochron??. Stosowane w ??rodowisku medycznym, w laboratoriach i centrach diagnostycznych, w przemy??le spo??ywczym, chemicznym, elektrotechnicznym i wsz??dzie tam gdzie obowi??zuj?? wysokie standardy bezpiecze??stwa sanitarno-higienicznego.
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