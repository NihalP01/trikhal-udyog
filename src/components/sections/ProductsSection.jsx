import React from 'react';
import { Cards } from '../cards/Cards';
import { makeStyles } from '@mui/styles';
import { Box, Button, Grid, Typography } from '@mui/material';
import { productsData } from '../../data/productsData';
import { Link } from 'react-router-dom';
import UseTable from '../UseTable';
import Popup from '../popups/Popup';

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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="products">
      <Typography className={classes.headingText}>
        <b>Explore our products</b>
      </Typography>
      <Typography className={classes.typoBody}>
        We made our products with the best quality materials which is
        100% natural and biodegradable.
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
              {product.variants && (
                <Grid item xs={12} md={6} p={2}>
                  <UseTable rows={product.variants} />
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                    mt={2}
                  >
                    <Box
                      mt={2}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                      width={'220px'}
                    >
                      <Button
                        variant="contained"
                        onClick={handleClick}
                      >
                        Order now
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>
        <Popup
          title="Do you want to order ?"
          openPopUp={open}
          handleClose={handleClose}
          content={
            <Box>
              <Typography gutterBottom variant="body2">
                You can call us on these numbers below to place an
                order and we will get back to you as soon as possible.
              </Typography>
              <Typography mt={2}>+91 9163922754</Typography>
              <Typography>+91 7872223506</Typography>
            </Box>
          }
        />
      </Box>
    </div>
  );
};

export default ProductsSection;
