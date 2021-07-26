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
import Image_sticky_mats from "../../images/sticky.png";
import Image_biomaster from "../../images/biomaster.png";
import Image_flood_fence from "../../images/flood_fence.png";
import Image_booms_berms from "../../images/booms_berms.png";


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "50px",
    marginBottom: "20px",
    display: 'flex',
    justifyContent: "space-around",
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(),
    },
    [theme.breakpoints.up('lg')] : {
      justifyContent: "space-between",
      paddingTop: "120px",
  },
  [theme.breakpoints.up('md')] : {
    paddingTop: "180px",
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
          link="/sorbenty"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_sorbent_pillows_socks}
          alt="Rękawy i poduszki sorpcyjne"
          title="Rękawy i poduszki sorpcyjne"
          name="Rękawy i poduszki sorpcyjne"
          description="Niezastąpione przy punktowych i wzdłużnych wyciekach do podkladania np. podczas napraw maszyn. Wypełnione bardzo chłonną włókniną!"
          link="/rekawy-poduszki-sorpcyjne"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_corksorb_greenOcean}
          alt="Corksorb i GreenOcean"
          title="Corksorb i GreenOcean"
          name="Corksorb i GreenOcean"
          description="Sorbent korkowy Corksorb (uniwersalny lub olejowy) i sorbent z wełny mineralnej Green Ocean - niezwykle lekkie i chłonne."
          link="/corksorb-greenocean"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_sump_Trays}
          alt="Wanny wychwytowe"
          title="Wanny wychwytowe"
          name="Wanny wychwytowe"
          description="Wykonane z najwyższej jakości polietylenu odporne na kwasy, oleje i agresywne chemikalia. Różne wielkości i pojemności."
           link="/wanny-wychwytowe"
          />
      </Paper>


      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_little_trays}
          alt="Kuwety ociekowe"
          title="Kuwety ociekowe"
          name="Kuwety ociekowe"
          description="w różnych rozmiarach, zarówno z kratownicami jak i bez do bezpiecznego przechowywania pojemników z substancjami niebezpiecznymi."
          link="/kuwety-ociekowe"
         />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_emergency_kits}
          alt="Zestawy awaryjne"
          title="Zestawy awaryjne"
          name="Zestawy awaryjne"
          description="w wersji uniwersalnej, olejowej i chemicznej (w koszach, szafkach, torbach, skrzynkach). Chłonności od 16l do 280l."
          link="/zestawy-awaryjne"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_cabinets_trolleys}
          alt="Szafki i wózki polietylenowe"
          title="Szafki i wózki polietylenowe"
          name="Szafki i wózki polietylenowe"
          description="Do transportu i przechowywania sorbentów oraz pojemników, kanistrów z kwasami, zasadami i innymi chemikaliami."
          link="/szafki-wozki"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_drain_covers}
          alt="Osłony i ograniczniki rozlewu"
          title="Osłony i ograniczniki rozlewu"
          name="Osłony i ograniczniki rozlewu"
          description="stanowią niezawodną barierę w powstrzymywaniu wycieków. Oferujemy osłony i ograniczniki różnych rozmiarów."
          link="/oslony-studzienkowe-ograniczniki-rozlewu"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_flood_fence}
          alt="Zapory przeciwpowodziowe"
          title="Zapory przeciwpowodziowe"
          name="Zapory przeciwpowodziowe"
          description="FloodFence to lekki i szybki w użyciu system kierowania wody, który bardzo szybko można zamontować. Nie wymaga balastu."
          link="/zapory-przeciwpowodziowe"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_booms_berms}
          alt="Bariery wodne"
          title="Bariery wodne"
          name="Bariery wodne"
          description="zatrzymują pływające zanieczyszczenia, oleje. Idealne do powstrzymywania rozprzestrzeniania się wycieków na powierzchni wód."
           link="/bariery-wodne"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_sticky_mats}
          alt="Maty biobójcze sticky"
          title="Maty biobójcze sticky"
          name="Maty biobójcze sticky"
          description="do zapewnienia higieny w szczególnie chronionych obszarach przejścia takich jak: szpitale, przychodnie, domy opieki."
          link="/maty-sticky"
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Product
          component="img"
          image={Image_biomaster}
          alt="Środki biobójcze"
          title="Środki biobójcze"
          name="Środki biobójcze"
          description="na bazie jonów srebra, w technologii Biomaster, to skuteczna ochrona przed wirusami, bakteriami i grzybami."
          link="/srodki-biobojcze-biomaster"
          />
      </Paper>






    </div>
  );
}

