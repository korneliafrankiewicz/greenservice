import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    [theme.breakpoints.up('lg')] : {
      maxWidth: 345
  },
},

btn: {
  backgroundColor: "#9ae767",

}

  
}));


export default function Product({component, image, alt, title, name, description}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.cardImg}
          component={component}
          image={image}
          alt={alt}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {name}
            </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary" className={classes.btn}>
          Sprawdź w sklepie
        </Button>
      </CardActions>
    </Card>
  );
}

// export default function Product() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia className={classes.cardImg}
//           component="img"
//           image={Image}
//           alt="Contemplative Reptile"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" variant="contained" color="inherit" className={classes.btn}>
//           Sprawdź w sklepie
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }