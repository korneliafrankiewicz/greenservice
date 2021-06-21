import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faHome, faEnvelope, faPhone, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
import Color from 'color';

const useStyles = makeStyles((theme) => ({
    root:{
        width: "100%",
        botom: "0",
        fontSize: "0.7em",
      
        [theme.breakpoints.up('lg')] : {
            flexDirection: "row",
            height: "70px",
            fontSize: "1em",
            height: "100px",
        },
    },
    footerContent: {
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: `${Color('#67b437').alpha(0.4).lighten(0.5)};`,
        [theme.breakpoints.up('lg')] : {
            flexDirection: "row",
            height: "60%",
        },
    },
    copyright: {
        backgroundColor: "#67b437",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30%",
        color: "white",
        padding: "5px 0",
        [theme.breakpoints.up('lg')] : {
            height: "50%",
        },
    },
    footerItem: {
        color: "black",
        padding: "2px 0",
        [theme.breakpoints.up('lg')] : {
            padding: "0",
        },
        "& a": {
            color: "black",
          }
    },
    icon: {
        marginRight: "10px"
    }
    
  }));

const Footer = () => {
    const classes = useStyles();
    return ( 
        <footer className={classes.root} color="secondary">
            <div className={classes.footerContent}>
                
                <div className={classes.footerItem}>
                <FontAwesomeIcon className={classes.icon} icon={faPhone}/>
                +48 (71) 716 02 00
                </div>

                <div className={classes.footerItem}>
                <FontAwesomeIcon className={classes.icon} icon={faEnvelope}/>
                biuro@greenservice.pl
                </div>


                <div className={classes.footerItem}>
                <FontAwesomeIcon className={classes.icon} icon={faHome}/>
                ul. T. Kościuszki 5,  59-300 Lubin
                </div>

                <div className={classes.footerItem}>
                <a rel="noopener noreferrer" target="_blank" className={classes.menuLink} href="https://sklep.greenservice.pl/pl/"><FontAwesomeIcon className={classes.icon} icon={faShoppingCart}/>Odwiedź nasz sklep</a>
                </div>

                <div className={classes.footerItem}>
                <a rel="noopener noreferrer" target="_blank" className={classes.menuLink} href="https://www.facebook.com/greenservice.sklep"><FontAwesomeIcon className={classes.icon} icon={faFacebookSquare}/>Odwiedź nas na Facebooku</a>
                </div>

            </div>
                 <div className={classes.copyright}>
                <FontAwesomeIcon className={classes.icon} icon={faCopyright}/>
                Copyryghts 2007-2021 Green Service Sp. z o. o. All rights reserved.
                </div>
        </footer>

     );
}
 
export default Footer;