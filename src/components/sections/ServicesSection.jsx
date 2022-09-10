import React from 'react';
import { Cards } from '../cards/Cards';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Typography } from '@mui/material';
import { productsData } from '../../data/productsData';
import { services } from '../../data/servicesData';

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

const ServicesSection = () => {
  const classes = useClasses();

  return (
    <div id="services" style={{marginTop: '2rem'}}>
      <Typography className={classes.headingText}>
        <b>Explore our services</b>
      </Typography>
      <Typography className={classes.typoBody}>
        This is secondary text
      </Typography>

      <Box p={4}>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service) => (
            <Grid item key={service.id}>
              <Cards.ProductCard props={service} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ServicesSection;
