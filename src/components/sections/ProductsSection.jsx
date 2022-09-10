import React from 'react';
import { Cards } from '../cards/Cards';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Typography } from '@mui/material';
import { productsData } from '../../data/productsData';
import { Link } from 'react-router-dom';


const useClasses = makeStyles((theme) => ({
  headingText: {
    fontSize: '1.8rem !important',
    fontWeight: '600',
    color: '#1f755c',
    marginBottom: '1.5rem !important',
    ['@media (max-width: 800px)']: {
      fontSize: '1.2rem !important',
    },
    ['@media (max-width: 600px)']: {
      fontSize: '0.9rem !important',
    },
    ['@media (max-width: 480px)']: {
      fontSize: '1.25rem !important',
    },
  },
  typoBody: {
    fontSize: '1.3rem !important',
    ['@media (max-width: 800px)']: {
      fontSize: '0.9rem !important',
    },
    ['@media (max-width: 600px)']: {
      fontSize: '0.7rem !important',
    },
    ['@media (max-width: 480px)']: {
      fontSize: '0.9rem !important',
    },
  },
}));

const ProductsSection = () => {
  const classes = useClasses();

  const handleClick = (id) => {
    window.location.href = `/products/${id}`;
  };



  return (
    <div id="products">
      <Typography className={classes.headingText}>
        <b>Explore our products</b>
      </Typography>
      <Typography className={classes.typoBody}>
        This is secondary text
      </Typography>

      <Box p={4}>
        <Grid container spacing={4} justifyContent="center">
          {productsData.map((product) => (
            <Grid item key={product.id} onClick={(e)=> handleClick(product.id)}>
              <Cards.ProductCard props={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsSection;
