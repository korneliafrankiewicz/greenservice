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
              to w????knina hydrofilna (absorbuj??ca wod??), wch??aniaj??ca substancje ciek??e niezale??nie od ich sk??adu chemicznego. Wyst??puj?? w kolorze szarym. Oferujemy je w postaci mat i rolek. Mog?? by?? perforowane w celu wygodniejszego ich dzielenia na mniejsze odcinki lub nieperforowane maj??ce zastosowanie w sytuacjach gdy u??ywamy ich na wi??kszych powierzchniach.
              W ofercie posiadamy w????knin?? jednowarstwow?? lub tr??jwarstwow?? o nast??puj??cych grubo??ciach:
            </Typography>

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-cienka">180 g/m??</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-srednia">275 g/m??</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-gruba">350 g/m??</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/180-sorbenty-uniwersalne-maty#/grubosc-bardzo_gruba">powy??ej 350 g/m??</a>
                  </Button>
            </div>
               
              </div>

              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe">Maty olejowe</a>
              </Button>
               to w????knina hydrofobowa (odpychaj??ca wod??), zatrzymuj??ca oraz wch??aniaj??ca wszystkie oleje i ciecze ropopochodne z ka??dego rodzaju powierzchni. Z uwagi na w??a??ciwo??ci odpychaj??ce wod??, doskonale nadaj?? si?? do usuwania zanieczyszcze?? z powierzchni w??d p??yn??cych, stoj??cych i ??ciek??w, a tak??e z powietrza w stacjach pneumatycznych. Sorbent do oleju nawet po wch??oni??ciu maksymalnej jego ilo??ci unosi si?? na wodzie.  Oferujemy je w postaci mat i rolek. Mog?? by?? perforowane w celu wygodniejszego ich dzielenia na mniejsze odcinki lub nieperforowane maj??ce zastosowanie na wi??kszych powierzchniach. 
              Wyst??puj?? w kolorze bia??ym lub niebieskim. W ofercie posiadamy w????knin?? jednowarstwow??, dwuwarstwow?? i tr??jwarstwow?? o nast??puj??cych grubo??ciach
            </Typography>

            <div className={classes.categoryTypes}>
                   <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-cienka">180 g/m??</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-srednia">275 g/m??</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-gruba">350 g/m??</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/182-maty-olejowe#/grubosc-bardzo_gruba">powy??ej 350 g/m??</a>
                  </Button>
            </div>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/181-maty-chemiczne">Maty chemiczne</a>
              </Button>
              to syntetyczna w????knina przystosowana do absorpcji agresywnych substancji. Wyst??puj?? w postaci hydrofilnej (poch??aniaj??ce wod??), wch??aniaj?? kwasy, rozpuszczalniki i inne substancje ciek??e niezale??nie od ich sk??adu chemicznego. Szybko i skutecznie usuwaj?? przypadkowe, niebezpieczne wycieki i rozlewy p??ynnych ??r??cych substancji chemicznych, w tym najbardziej agresywnych kwas??w i zasad. Przeznaczone m.in. do ochrony powierzchni roboczych przed niespodziewanym wyciekiem gro??nych, truj??cych substancji w laboratoriach, halach przemys??owych i magazynach. Oferowane w postaci mat i rolek. Dost??pne z perforacj?? - w celu wygodniejszego dzielenia na mniejsze arkusze lub bez perforacji - stosowane w sytuacjach gdy u??ywamy ich do zabezpieczenia wi??kszych powierzchni. 
              Wyst??puj?? w kolorach ??????tym. W ofercie dost??pne w????kniny jednowarstwowe, dwuwarstwowe i tr??jwarstwowe r????nych grubo??ci.
            </Typography>

            <div className={classes.categoryTypes}>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/181-maty-chemiczne#/grubosc-srednia">275 g/m??</a>
                  </Button>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/181-maty-chemiczne#/grubosc-gruba">350 g/m??</a>
                  </Button>

            </div>
               
              </div>


              <div className={classes.category}>
              <Typography className={classes.paperCardContent}>
              <Button className={classes.categoryLink} >
             <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/213-maty-torowe">Maty torowe</a>
              </Button>
              Mata sorbentowa torowa, nieprzepuszczalna, bardzo gruba. Wierzchnia (czarna) warstwa jest odporna na promieniowanie UV, bardzo ch??onna warstwa ??rodkowa odpowiada za doskona??e w??a??ciwo??ci sorpcyjne, a nieprzepuszczalna warstwa dolna (bia??a) chroni przed przedostaniem si?? substancji szkodliwych do gleby. Warstw?? wewn??trzn?? stanowi mi??kka w????knina (meltblown) utrzymuj??ca wewn??trz zaabsorbowan?? ciecz.
              Maty torowe znajduj?? zastosowanie przede wszystkim podczas tankowania lokomotyw, w okolicach peron??w, tymczasowych napraw oraz podczas oliwienia tor??w. 
              Stosowane s?? r??wnie?? w przemy??le tam gdzie potrzebne jest zastosowanie szczeg??lnie mocnych mat olejowych, kt??re zapobiegaj?? przedostawaniu si?? do pod??o??a szkodliwych substancji.
            </Typography>

            <div className={classes.categoryTypes}>

                  <Button className={classes.categoryType} variant="contained" color="primary">
                     <a rel="noopener noreferrer" target="_blank" href="https://sklep.greenservice.pl/pl/213-maty-torowe">powy??ej 350 g/m??</a>
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
            <StyledTableCell align="right">Ilo???? sztuk&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Gramatura&nbsp;(g/m2)</StyledTableCell>
            <StyledTableCell align="right">Ch??onno????&nbsp;(l)</StyledTableCell>
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