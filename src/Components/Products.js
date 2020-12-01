import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import beauty from '../assets/beauty.jpeg'
import home from '../assets/home-decor.jpg'
import food from '../assets/food.jpeg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return ( 
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="beauty products"
          image={beauty}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Beauty
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Check out the latest in Beauty
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to Cart
        </Button>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="home-decor"
          image={home}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Home-Decor
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Up your comfort
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to Cart
        </Button>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="food"
          image={food}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Best recipes 2020
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to Cart
        </Button>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
    </>
  );
}