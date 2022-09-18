import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import UseTable from '../UseTable';

const useStyles = makeStyles({
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
  aboutBox: {
    padding: '4rem',
    ['@media (max-width: 800px)']: {
      padding: '2rem',
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
  aboutImage: {
    ['@media (max-width: 480px)']: {
      display: 'none',
    },
  },
});

const AboutSection = () => {
  const classes = useStyles();
  return (
    <div id="about">
      <Box className={classes.aboutBox}>
        <Typography className={classes.headingText}>
          <b>About Us</b>
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs>
          <Typography className={classes.typoBody} align={'left'}>
              Trikhal Udyogs Pvt Ltd is an Indian Company which used
              to carry on the business of manufacturing, trading,
              marketing, import, export, buy, sell, dealers and as
              agents, stockists, distributors, C & F agent, commission
              agent, representative, franchiser and suppliers of all
              kinds of biodegradable plastics products, bio-plastics
              products, environment friendly products, packaging
              products, flexible packaging products for industrial,
              agricultural, horticultural purpose as well as household
              purpose which include compostable bags, grocery carrying
              bags, food storage bags, garbage bags and other related
              products and all other such products of allied nature
              made thereof in India or elsewhere.
            </Typography>
          </Grid>

          <Grid item xs={6} className={classes.aboutImage}>
            <img
              width="100%"
              maxWidth={'47.5rem'}
              src={`${process.env.PUBLIC_URL}/assets/images/about.png`}
              alt="hero img"
            />
            {/* <Grid container spacing={2}>
              {aboutData.map((about) => (
                <Grid item key={about.id}>
                  <Cards.AboutUsCard item={about} />
                </Grid>
              ))}
            </Grid> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutSection;
