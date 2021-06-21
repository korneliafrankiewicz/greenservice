import React, { useState } from 'react';
import {Link} from "react-scroll";
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHandsHelping, faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Logo from "../../images/GS_logo.png";
import DrawerComponent from './DrawerComponent';


const useStyles = makeStyles(theme => ({
  appbar: {

  },
  logo: {
    fontSize: '1.9rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
    },
  },

  tabsContainer: {
    marginLeft: 'auto',
    display:"flex",
    alignItems: "center"
  },


  imageLogo: {
    backgroundImage: `url(${Logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "220px",
    height: "70px",
    marginTop: "5px",
  },
  menuButton: {
    color: "white",
    fontSize: "1em",
    marginRight: "20px",
    "& a": {
      color: "white",
    }
  },
  icon: {
    marginRight: "7px"
  }
}));

const Navbar = () => {
  //Hooks
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  //Boolean(anchorEl) This is use to convert a null value in to a boolean
  //anchorEl Is us to set the position of the menu

  const classes = useStyles();

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  //Functions
  const handleClickTab = (e, newValue) => {
    //The second value contains the current index
    setValue(newValue);
  };

  // const handleOpenMenu = e => {
  //   setAnchorEl(e.currentTarget);
  // };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar elevation={0} color='primary' className={classes.appbar}>
        <Toolbar>
      
          <div className={classes.imageLogo}></div>
      
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Tabs
                onChange={handleClickTab}
                className={classes.tabsContainer}
                indicatorColor='secondary'
               value={value}
               TabIndicatorProps={{style: {backgroundColor: "transparent"}}}
              
               >
                <Button className={classes.menuButton} color="secondary">
                <Link className={classes.menuLink}  to="cooperation" smooth={true} duration={1000}><FontAwesomeIcon className={classes.icon} icon={faHandsHelping}/>Oferta współpracy</Link>
                </Button>
                
                <Button className={classes.menuButton} color="secondary">
                <Link className={classes.menuLink} to="bestsellers" smooth={true} duration={1000}><FontAwesomeIcon className={classes.icon} icon={faHeart}/>Bestsellery</Link>
                </Button>
               
                <Button className={classes.menuButton} color="secondary">
              <a rel="noopener noreferrer" target="_blank" className={classes.menuLink} href="https://sklep.greenservice.pl/pl/"><FontAwesomeIcon className={classes.icon} icon={faShoppingCart}/>Sklep</a>
                </Button>
                
                <Button className={classes.menuButton} color="secondary">
                <Link  to="cooperation" smooth={true} duration={1000}><FontAwesomeIcon className={classes.icon} icon={faEnvelope}/>Kontakt</Link>
                </Button>
               
                        
               
               
               
                {/* <Tab
                  disableRipple
              
                  label='Courses'
                />
                <Tab
                  disableRipple
                
                  label='Fees'
                />
                <Tab
                  disableRipple
                
                  label='Parents Account'
                /> */}


      
              </Tabs>
              {/* <Button
                aria-controls='menu'
                onMouseOver={handleOpenMenu}
                className={classes.acount}
                disableElevation
                disableRipple
                variant='contained'
                color='secondary'>
                Profile
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Menu */}
      <Menu
        style={{ marginTop: '50px' }}
        id='menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}>
        <MenuItem onClick={handleCloseMenu}>My Account</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Examination Results</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Promotions</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Pending Fees</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Final Project</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;