import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) =>({
    root: {
      maxWidth: 345,
      flexGrow:1
    },
    media: {
      height: 140,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  
  export default function MediaCard(props) {
    const classes = useStyles();
  
    return ( 
      <Grid item>
      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            title="beauty products"
            image={props.image}
          />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
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
      </Grid>
    )
}
