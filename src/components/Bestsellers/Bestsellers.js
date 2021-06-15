import Product from '../Product/Product';
import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Image_sump_Trays from '../../images/wanny_wychwytowe.png';
import Image_little_trays from "../../images/kuwety_ociekowe.png";
import Image_emergency_kits from "../../images/zestawy_ratunkowe.png";
import Image_corksorb_greenOcean from "../../images/corksorb_greenocean.png";
import Image_sorbent_mats from "../../images/maty_sorbentowe.png";
import Image_sorbent_pillows_socks from "../../images/rekawy_poduszki.png";
import Image_cabinets_trolleys from "../../images/szafy_wozki.png";
import Image_drain_covers from "../../images/ograniczniki_rozlewu.png";
import Image_sticky_mats from "../../images/maty_sticky.png";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    marginBottom: "20px",
    display: 'flex',
    justifyContent: "space-around",
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(),
    },
    [theme.breakpoints.up('lg')] : {
      justifyContent: "space-between",
  },
  [theme.breakpoints.up('md')] : {

},
  },
  paperCard: {
  marginBottom: "60px",
  marginRight: "0px",
  marginLeft: "0px",
  [theme.breakpoints.up('md')] : {
    marginRight: "8px",
  marginLeft: "8px",
},
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="bestsellers">
        <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_sorbent_mats}
          alt="Maty i rolki sorbentowe"
          title="Maty i rolki"
          name="Maty i rolki sorbentowe"
          description="Najwyższy standard jakości, bardzo chłonna włóknina polipropylenowa europejskiej i amerykańskiej produkcji. "
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_sorbent_pillows_socks}
          alt="Rękawy i poduszki sorpcyjne"
          title="Rękawy i poduszki sorpcyjne"
          name="Rękawy i poduszki sorpcyjne"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
           across all continents except Antarctica"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_corksorb_greenOcean}
          alt="Corksorb i GreenOcean"
          title="Corksorb i GreenOcean"
          name="Corksorb i GreenOcean"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
           across all continents except Antarctica"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_sump_Trays}
          alt="Wanny wychwytowe"
          title="Wanny wychwytowe"
          name="Wanny wychwytowe"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
           across all continents except Antarctica"
          />
      </Paper>


      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_little_trays}
          alt="Kuwety ociekowe"
          title="Kuwety ociekowe"
          name="Kuwety ociekowe"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
           across all continents except Antarctica"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_emergency_kits}
          alt="Zestawy awaryjne"
          title="Zestawy awaryjne"
          name="Zestawy awaryjne"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
           across all continents except Antarctica"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_cabinets_trolleys}
          alt="Szafki i wózki polietylenowe"
          title="Szafki i wózki polietylenowe"
          name="Szafki i wózki polietylenowe"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
           across all continents except Antarctica"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_drain_covers}
          alt="Osłony i ograniczniki rozlewu"
          title="Osłony i ograniczniki rozlewu"
          name="Osłony i ograniczniki rozlewu"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
           across all continents except Antarctica"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_sticky_mats}
          alt="Osłony i ograniczniki rozlewu"
          title="Osłony i ograniczniki rozlewu"
          name="Osłony i ograniczniki rozlewu"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
           across all continents except Antarctica"
          />
      </Paper>





    </div>
  );
}

