import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper,  Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SorbentsImage from "./images/sorbentBcg.JPG";
import sorbents from "./images/sorbenty.png";
import Color from 'color';
import Footer from "../Footer";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundImage: `url(${SorbentsImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    
  },

  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
   
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
  backgroundImage: `url(${sorbents})`,
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

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#67b437",
      color: theme.palette.common.white,
      textTransform: "uppercase"
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein, cos) {
    return { name, calories, fat, carbs, protein, cos };
  }
  
  const rows = [
    createData('GDM200', 159, 6.0, 24, 4.0, 9),
    createData('GDML100', 237, 9.0, 37, 4.3, 9),
    createData('GDM100', 262, 16.0, 24, 6.0, 9),
    createData('GFMFL100', 305, 3.7, 67, 4.3, 9),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 9),
  ];


const Sorbents = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
            <div className={classes.contentWrapper}>
            <       Typography className={classes.title} variant="h2" >
                    Sorbenty polipropylenowe
                    </Typography> 

                    <div className={classes.imageWrapper}> </div>
              </div>

              <Paper className={classes.paperCard}>
              
              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#">Maty uniwersalne</a>
              </Button>
              to włóknina hydrofilna (absorbująca wodę), wchłaniająca substancje ciekłe niezależnie od ich składu chemicznego. Występują w kolorze szarym. Oferujemy je w postaci mat i rolek. Mogą być perforowane w celu wygodniejszego ich dzielenia na mniejsze odcinki lub nieperforowane mające zastosowanie w sytuacjach gdy używamy ich na większych powierzchniach.
              W ofercie posiadamy włókninę jednowarstwową lub trójwarstwową o następujących grubościach:
            </Typography>

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-cienka">180 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-srednia">275 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-gruba">350 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-bardzo_gruba">powyżej 350 g/m²</a>
                  </Button>
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe">Maty olejowe</a>
              </Button>
               to włóknina hydrofobowa (odpychająca wodę), zatrzymująca oraz wchłaniająca wszystkie oleje i ciecze ropopochodne z każdego rodzaju powierzchni. Z uwagi na właściwości odpychające wodę, doskonale nadają się do usuwania zanieczyszczeń z powierzchni wód płynących, stojących i ścieków, a także z powietrza w stacjach pneumatycznych. Sorbent do oleju nawet po wchłonięciu maksymalnej jego ilości unosi się na wodzie.  Oferujemy je w postaci mat i rolek. Mogą być perforowane w celu wygodniejszego ich dzielenia na mniejsze odcinki lub nieperforowane mające zastosowanie na większych powierzchniach. 
              Występują w kolorze białym lub niebieskim. W ofercie posiadamy włókninę jednowarstwową, dwuwarstwową i trójwarstwową o następujących grubościach
            </Typography>

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-cienka">180 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-srednia">275 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-gruba">350 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-bardzo_gruba">powyżej 350 g/m²</a>
                  </Button>
            </div>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/181-maty-chemiczne">Maty chemiczne</a>
              </Button>
              to syntetyczna włóknina przystosowana do absorpcji agresywnych substancji. Występują w postaci hydrofilnej (pochłaniające wodę), wchłaniają kwasy, rozpuszczalniki i inne substancje ciekłe niezależnie od ich składu chemicznego. Szybko i skutecznie usuwają przypadkowe, niebezpieczne wycieki i rozlewy płynnych żrących substancji chemicznych, w tym najbardziej agresywnych kwasów i zasad. Przeznaczone m.in. do ochrony powierzchni roboczych przed niespodziewanym wyciekiem groźnych, trujących substancji w laboratoriach, halach przemysłowych i magazynach. Oferowane w postaci mat i rolek. Dostępne z perforacją - w celu wygodniejszego dzielenia na mniejsze arkusze lub bez perforacji - stosowane w sytuacjach gdy używamy ich do zabezpieczenia większych powierzchni. 
              Występują w kolorach żółtym. W ofercie dostępne włókniny jednowarstwowe, dwuwarstwowe i trójwarstwowe różnych grubości.
            </Typography>

            <div className={classes.categoryTypes}>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/181-maty-chemiczne#/grubosc-srednia">275 g/m²</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/181-maty-chemiczne#/grubosc-gruba">350 g/m²</a>
                  </Button>

            </div>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/213-maty-torowe">Maty torowe</a>
              </Button>
              Mata sorbentowa torowa, nieprzepuszczalna, bardzo gruba. Wierzchnia (czarna) warstwa jest odporna na promieniowanie UV, bardzo chłonna warstwa środkowa odpowiada za doskonałe właściwości sorpcyjne, a nieprzepuszczalna warstwa dolna (biała) chroni przed przedostaniem się substancji szkodliwych do gleby. Warstwę wewnętrzną stanowi miękka włóknina (meltblown) utrzymująca wewnątrz zaabsorbowaną ciecz.
              Maty torowe znajdują zastosowanie przede wszystkim podczas tankowania lokomotyw, w okolicach peronów, tymczasowych napraw oraz podczas oliwienia torów. 
              Stosowane są również w przemyśle tam gdzie potrzebne jest zastosowanie szczególnie mocnych mat olejowych, które zapobiegają przedostawaniu się do podłoża szkodliwych substancji.
            </Typography>

            <div className={classes.categoryTypes}>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/213-maty-torowe">powyżej 350 g/m²</a>
                  </Button>
            </div>
               
              </div>
              
              </Paper>

              <div className={classes.space}></div>
              
              <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Model</StyledTableCell>
            <StyledTableCell align="right">Kolor&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Wymiar&nbsp;(cmxcm)</StyledTableCell>
            <StyledTableCell align="right">Ilość sztuk&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Gramatura&nbsp;(g/m2)</StyledTableCell>
            <StyledTableCell align="right">Chłonność&nbsp;(l)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.cos}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

              <div className={classes.space}></div>


            </Container>

            <Footer />
                   
        </div>
     );
}
 
export default Sorbents;