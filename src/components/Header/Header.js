import React from 'react';
import "./Header.scss"
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    marginRight: "6vw",
  },
  menuButton: {
   maxWidth: "220px",
   minWidth: "220px",
   height: "100%",
   display: "flex"
  },
  menuLink: {
    color: "#67b437",
    maxWidth: "260px",
    minWidth: "260px",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 15px",
    transition: ".5s",
    textTransform: "uppercase",
    borderRight: "2px solid #338400",
    "&:hover": {
      cursor: "pointer",
      fontSize: "1.1em"
  }
   },
   lastLink: {
    border: "none",
   },
  logoWrapper: {
    flexGrow: 1,
  },
  icon: {
    marginRight: "15px",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "8vw",
    marginTop: "5px",
  }
}))

export const Header = () => {
  const classes = useStyles();

  return (
    <Navbar />
  //   <Container>
  // <div className={classes.root}>
    
  // <AppBar className={classes.appBar} color="inherit" position="fixed">
    
  //   <Toolbar>
  //     <div className={classes.logoWrapper}>
  //     <img id="logo" className={classes.logo} src={Logo}  width="200px" height="auto"  alt="logo_green_service"/>
  //     </div>
   
  //   <ButtonGroup color="primary" variant="text" className={classes.menuBar}>

  //       <Link className={classes.menuLink}  to="cooperation" smooth={true} duration={1000}><FontAwesomeIcon className={classes.icon} icon={faHandsHelping}/>Oferta współpracy</Link>
  //       <Link className={classes.menuLink} to="cooperation" smooth={true} duration={1000}><FontAwesomeIcon className={classes.icon} icon={faHeart}/>Bestsellery</Link>
  //       <a className={classes.menuLink} href="https://sklep.greenservice.pl/pl/"><FontAwesomeIcon className={classes.icon} icon={faShoppingCart}/>Sklep</a>
  //       <Link className={classNames(classes.menuLink, classes.lastLink)} to="cooperation" smooth={true} duration={1000}><FontAwesomeIcon className={classes.icon} icon={faEnvelope}/>Kontakt</Link>
  //   </ButtonGroup>
  
  //   </Toolbar>
  // </AppBar>
  // </div>  
  // </Container>


  )
}