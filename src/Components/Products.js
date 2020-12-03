import React from 'react';
import home from '../assets/home-decor.jpg'
import food from '../assets/food.jpeg';
import beauty from '../assets/beauty.jpeg'
import Grid from '@material-ui/core/Grid'
import Card from './Card';

const Products = props => {

  return (
<Grid container spacing={4} direction="row"
      justify="center"
      alignItems="center">
        <Card image={beauty} title='Beauty' description='Check out the latest in Beauty' />
        <Card image={home} title='Home-Decor' description='Up your comfort'/>
        <Card image={food} title='Food' description='Best recipes 2020'/>
    </Grid>
  );
}

export default Products;
