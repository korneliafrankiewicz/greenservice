import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Color from 'color';
import { Container, Typography, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   
    paperCard: {
      padding: "30px",
      backgroundColor: `${Color('white').alpha(0.8).lighten(0.5)};`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      margin: "0",
      marginBottom: "60px",
      flexDirection: "column",
      [theme.breakpoints.up('md')] : {
        flexDirection: "row"
    } 
    },
    paperCardContent: {
      display: "flex",
      flexDirection: "column",

    },
    header: {
        lineHeight: "1.6em",
        [theme.breakpoints.up('md')] : {
        lineHeight: "1em"
        } 
    }
  }));


const CompanyData = () => {
    const classes = useStyles();
    return ( 
        <Paper className={classes.paperCard} id="company_data">

            <div paperCardContent>
            <Typography variant="h6" className={classes.header}>Dane adresowe firmy</Typography>
            <Typography variant="body2">
            Adres:  ul. T.Kościuszki 5, 59-300 Lubin
            </Typography>
            <Typography variant="body2">
            NIP: PL8982055141
            </Typography>
            <Typography variant="body2">
            KRS: 0000220913
            </Typography>
            </div>

            <div paperCardContent>
            <Typography variant="h6" className={classes.header}>Konta bankowe</Typography>
            <Typography variant="body2">
            PLN 94 8669 0001 2031 0315 0955 0001 
            </Typography>
            <Typography variant="body2">
            EUR 40 8669 0001 2031 0315 0955 0003
            </Typography>
            <Typography variant="body2">
            BIC (SWIFT): GBWCPLPP
            </Typography>
            <Typography variant="body2">
            IBAN: PL 40 8669 0001 2031 0315 0955 0003
            </Typography>
            </div>

            <div paperCardContent>
           
            <Typography variant="body2">
            USD 13 8669 0001 2031 0315 0955 0004
            </Typography>
            <Typography variant="body2">
            BIC (SWIFT): GBWCPLPP
            </Typography>
            <Typography variant="body2">
            IBAN: PL 13 8669 0001 2031 0315 0955 0004
            </Typography>
            </div>
        </Paper>
     );
}
 
export default CompanyData;