import React from 'react';
import { Cards } from '../cards/Cards';
import { makeStyles } from '@mui/styles';
import { Box, Button, Grid, Typography } from '@mui/material';
import { productsData, rows } from '../../data/productsData';
import { Link } from 'react-router-dom';
import UseTable from '../UseTable';

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
    fontSize: '1.2rem !important',
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

  return (
    <div id="products">
      <Typography className={classes.headingText}>
        <b>Explore our products</b>
      </Typography>
      <Typography className={classes.typoBody}>
        We made our products with the best quality materials which is 100% natural and biodegradable.
      </Typography>

      <Box mt={2}>
        <Grid container justifyContent="center">
          {productsData.map((product) => (
            <Grid
              container
              spacing={4}
              mt={3}
              key={product.id}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Grid item>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`/products/${product.id}`}
                >
                  <Cards.ProductCard props={product} />
                </Link>
              </Grid>
              {product.variants && <Grid item>
                <UseTable rows={product.variants} />
                <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} mt={2}>
                  <Typography variant='body'>Order now</Typography>
                  <Box mt={2} style={{display: 'flex', justifyContent: 'space-between'}} width={'220px'}>
                    <Button variant='contained'>Call</Button>
                    <Button variant='contained'>Whatsapp</Button>
                  </Box>
                </Box>
              </Grid>}
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsSection;
