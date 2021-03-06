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
                  ??rodki biob??jcze Biomaster
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              <Typography className={classes.paperCardContentTitle}>
              <Button className={classes.categoryLink} size="large">
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/909-preparat-biobojczy-biomaster-750-ml-skuteczna-obrona-przed-wirusami-i-bakteriami.html">Preparat biomaster</a>
              </Button>
              bezkompromisowy dla patogen??w, skuteczny ??rodek biob??jczy stosowany do powierzchni porowatych, tkanin, tekstyli??w oraz do spryskiwania powierzchni zmywalnych mat dekontaminacyjnych dla uzyskania w??a??ciwo??ci biob??jczych. 
              Produkt najwy??szej  jako??ci stworzony na bazie jon??w srebra. Preparat zapewnia ochron?? przed bakteriami, grzybami i wirusami znacznie zmniejszaj??c prawdopodobie??stwo zaka??e?? krzy??owych. Podczas gdy og??lnie dost??pne ??rodki dezynfekuj??ce mog?? by?? natychmiast skuteczne w usuwaniu bakterii, to jednak ich oddzia??ywanie znika r??wnie szybko, nie blokuj??c remisji - zanieczyszczenie mo??e wyst??pi?? ponownie. Biomaster pomaga ograniczy?? rozw??j bakterii mi??dzy czyszczeniami i zmniejsza ryzyko rozprzestrzeniania si?? chor??b zaka??nych. Dzia??a d??u??ej. 
              Ochrona Biomaster jest niezwykle trwa??a, dzia??a intensywnie i bezkompromisowo, aby powstrzyma?? wirusy i bakterie zagra??aj??ce zdrowiu.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              Biomaster to ??rodek biob??jczy stosowany w przemy??le do og??lnej dezynfekcji oraz do spryskiwania powierzchni mat dekontaminacyjnych. Dedykowany plac??wkom medycznym, przedsi??biorstwom z bran??y spo??ywczej, fermom hodowlanym i innym wra??liwym sektorom w kt??rych obowi??zuj?? restrykcyjne przepisy sanitarne. Biomaster jest idealny do stosowania w sytuacjach i miejscach, w kt??rych wysoki poziom higieny ma kluczowe znaczenie, takich jak szpitale, szko??y, transport publiczny i kuchnie.
              Wyj??tkowo niebezpieczne bakterie mog?? szybko si?? namna??a?? w tego rodzaju miejscach zwi??kszaj??c ryzyko przeniesienia zanieczyszcze?? z powierzchni i sprz??tu na ludzi. W okresie obni??onej odporno??ci niweluje niepotrzebne ryzyko zaka??e?? zwyk??ych i krzy??owych.
              Podczas gdy ??rodki dezynfekuj??ce mog?? by?? natychmiast skuteczne w usuwaniu bakterii, po kilku godzinach efekt zanika i zanieczyszczenie mo??e wyst??pi?? ponownie. Biomaster pomaga ograniczy?? rozw??j bakterii mi??dzy czyszczeniami i zmniejsza ryzyko rozprzestrzeniania si?? chor??b zaka??nych.
              Na podstawie przeprowaadzonych test??w udowodniono, ??e ogranicza wzrost tych drobnoustroj??w nawet o 99,99%.
              Skuteczno???? na COVID-19: Covid-19 jest cz??onkiem rodziny Coronaviridae. S?? to wirusy otoczone lipidow?? pow??ok?? ochronn??, kt??r?? stosunkowo ??atwo uszkodzi?? i zniszczy??. Badania i testy kliniczne jednoznacznie sugeruj??, i?? je??li Biomaster zabija Norowirusy (kt??re jest znacznie trudniej zniszczy?? ze wzgl??du na tward?? bia??kow?? otoczk??) oraz Koronawirusy wyst??puj??ce u kot??w (Feline Coronavirus), to b??dzie tak samo skuteczny na wirusa COVID-19.  Biomaster bardzo skutecznie hamuje wzrost i namna??anie si?? wirus??w na powierzchniach porowatych (tekstylnych).
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
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/1371-folia-biobojcza-film-antybakteryjny-i-przeciwwirusowy.html">Folie biob??jcze</a>
              </Button>
              to innowacyjne rozwi??zanie przeciwko bakteriom, wirusom i grzybom, kt??re namna??aj?? si?? na r????nych powierzchniach. Folia ochronna jest przezroczysta, samoprzylepna i nadaje si?? do ka??dej powierzchni o wysokiej cz??stotliwo??ci kontaktu. Jej dzia??anie to hamowanie rozwoju szerokiej gamy drobnoustroj??w i  zapewnienie d??ugotrwa??ej ochrony powierzchni cz??sto dotykanych. Gwarantuje u??ytkownikom wysoki standard higieny i bezpiecze??stwa poprzez obni??enie ryzyka infekcji. Produkt wykonany w technologii BIOMASTER - wyprodukowany na bazie jon??w srebra. Preparat zapewnia ochron?? przed bakteriami, grzybami i wirusami.
            </Typography>
             
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/1405-folia-biobojcza-40-mikronow-film-antybakteryjny-i-przeciwwirusowy-40-m.html">Folia 40 mikron??w</a>
              </Button>
              jest cie??sza, bardziej elastyczna. Nadaje si?? do oklejenia powierzchni takich jak klawiatury, telefony dotykowe itd.
            </Typography>    
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/preparaty-biobojcze/1371-folia-biobojcza-film-antybakteryjny-i-przeciwwirusowy.html">Folia 100 mikron??w</a>
              </Button>
              jznajduje zastosowanie w medycynie: krzes??a w poczekalniach, recepcjach, komputery, ??????ka, uchwyty, klamki i wszystkie inne przedmioty, kt??re nale??y chroni??, gdy?? maj?? z nimi kontakt pacjenci. Nadaje si?? r??wnie?? do transportu publicznego, z kt??rego codziennie korzysta wiele os??b. Folia antybakteryjna pomaga chroni?? ka??d?? powierzchni??, na przyk??ad toalety publiczne, dworce kolejowe / autobusowe i lotniska, automaty sprzedaj??ce, w??zki sklepowe, szko??a, biurka, sto????wki, restauracje, przedszkola, przychodnie itp.
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