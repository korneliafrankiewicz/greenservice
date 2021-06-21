import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper,  Button} from '@material-ui/core';
import GeneticImage from "./images/genetic.jpg";
import biomasterImg from "./images/biomaster-img.png"
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
  backgroundImage: `url(${biomasterImg})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100px",
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


const Biomaster = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                  Środki biobójcze Biomaster
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/909-preparat-biobojczy-biomaster-750-ml-skuteczna-obrona-przed-wirusami-i-bakteriami.html">Preparat biomaster</a>
              </Button>
              bezkompromisowy dla patogenów, skuteczny środek biobójczy stosowany do powierzchni porowatych, tkanin, tekstyliów oraz do spryskiwania powierzchni zmywalnych mat dekontaminacyjnych dla uzyskania właściwości biobójczych. 
              Produkt najwyższej  jakości stworzony na bazie jonów srebra. Preparat zapewnia ochronę przed bakteriami, grzybami i wirusami znacznie zmniejszając prawdopodobieństwo zakażeń krzyżowych. Podczas gdy ogólnie dostępne środki dezynfekujące mogą być natychmiast skuteczne w usuwaniu bakterii, to jednak ich oddziaływanie znika równie szybko, nie blokując remisji - zanieczyszczenie może wystąpić ponownie. Biomaster pomaga ograniczyć rozwój bakterii między czyszczeniami i zmniejsza ryzyko rozprzestrzeniania się chorób zakaźnych. Działa dłużej. 
              Ochrona Biomaster jest niezwykle trwała, działa intensywnie i bezkompromisowo, aby powstrzymać wirusy i bakterie zagrażające zdrowiu.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              Biomaster to środek biobójczy stosowany w przemyśle do ogólnej dezynfekcji oraz do spryskiwania powierzchni mat dekontaminacyjnych. Dedykowany placówkom medycznym, przedsiębiorstwom z branży spożywczej, fermom hodowlanym i innym wrażliwym sektorom w których obowiązują restrykcyjne przepisy sanitarne. Biomaster jest idealny do stosowania w sytuacjach i miejscach, w których wysoki poziom higieny ma kluczowe znaczenie, takich jak szpitale, szkoły, transport publiczny i kuchnie.
              Wyjątkowo niebezpieczne bakterie mogą szybko się namnażać w tego rodzaju miejscach zwiększając ryzyko przeniesienia zanieczyszczeń z powierzchni i sprzętu na ludzi. W okresie obniżonej odporności niweluje niepotrzebne ryzyko zakażeń zwykłych i krzyżowych.
              Podczas gdy środki dezynfekujące mogą być natychmiast skuteczne w usuwaniu bakterii, po kilku godzinach efekt zanika i zanieczyszczenie może wystąpić ponownie. Biomaster pomaga ograniczyć rozwój bakterii między czyszczeniami i zmniejsza ryzyko rozprzestrzeniania się chorób zakaźnych.
              Na podstawie przeprowaadzonych testów udowodniono, że ogranicza wzrost tych drobnoustrojów nawet o 99,99%.
              Skuteczność na COVID-19: Covid-19 jest członkiem rodziny Coronaviridae. Są to wirusy otoczone lipidową powłoką ochronną, którą stosunkowo łatwo uszkodzić i zniszczyć. Badania i testy kliniczne jednoznacznie sugerują, iż jeśli Biomaster zabija Norowirusy (które jest znacznie trudniej zniszczyć ze względu na twardą białkową otoczkę) oraz Koronawirusy występujące u kotów (Feline Coronavirus), to będzie tak samo skuteczny na wirusa COVID-19.  Biomaster bardzo skutecznie hamuje wzrost i namnażanie się wirusów na powierzchniach porowatych (tekstylnych).
            </Typography>
            

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/1367-preparat-biobojczy-biomaster-100-ml-skuteczna-obrona-przed-wirusami-i-bakteriami.html">Opakowanie 500 ml</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/909-preparat-biobojczy-biomaster-750-ml-skuteczna-obrona-przed-wirusami-i-bakteriami.html">Opakowanie 750 ml</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/1182-preparat-biobojczy-biomaster-5-l-skuteczna-obrona-przed-wirusami-i-bakteriami.html">Opakowanie 5 l</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/1138-preparat-biobojczy-biomaster-20-l-skuteczna-obrona-przed-wirusami-i-bakteriami.html">Opakowanie 20 l</a>
                  </Button>

                 
            </div>
               
              </div>

              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/1371-folia-biobojcza-film-antybakteryjny-i-przeciwwirusowy.html">Folie biobójcze</a>
              </Button>
              to innowacyjne rozwiązanie przeciwko bakteriom, wirusom i grzybom, które namnażają się na różnych powierzchniach. Folia ochronna jest przezroczysta, samoprzylepna i nadaje się do każdej powierzchni o wysokiej częstotliwości kontaktu. Jej działanie to hamowanie rozwoju szerokiej gamy drobnoustrojów i  zapewnienie długotrwałej ochrony powierzchni często dotykanych. Gwarantuje użytkownikom wysoki standard higieny i bezpieczeństwa poprzez obniżenie ryzyka infekcji. Produkt wykonany w technologii BIOMASTER - wyprodukowany na bazie jonów srebra. Preparat zapewnia ochronę przed bakteriami, grzybami i wirusami.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/1405-folia-biobojcza-40-mikronow-film-antybakteryjny-i-przeciwwirusowy-40-m.html">Folia 40 mikronów</a>
              </Button>
              jest cieńsza, bardziej elastyczna. Nadaje się do oklejenia powierzchni takich jak klawiatury, telefony dotykowe itd.
            </Typography>    
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/1371-folia-biobojcza-film-antybakteryjny-i-przeciwwirusowy.html">Folia 100 mikronów</a>
              </Button>
              jznajduje zastosowanie w medycynie: krzesła w poczekalniach, recepcjach, komputery, łóżka, uchwyty, klamki i wszystkie inne przedmioty, które należy chronić, gdyż mają z nimi kontakt pacjenci. Nadaje się również do transportu publicznego, z którego codziennie korzysta wiele osób. Folia antybakteryjna pomaga chronić każdą powierzchnię, na przykład toalety publiczne, dworce kolejowe / autobusowe i lotniska, automaty sprzedające, wózki sklepowe, szkoła, biurka, stołówki, restauracje, przedszkola, przychodnie itp.
            </Typography>    
              </div>


              

              
              </Paper>

              <div className={classes.space}></div>

            </Container>

            <Footer />
                   
        </div>
     );
}
 
export default Biomaster;