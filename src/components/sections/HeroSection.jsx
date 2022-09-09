import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
  root: {
    marginTop: '4rem',
  },
  btnExplore: {
    height: '2.9rem',
    boxShadow: '1px 1px 17px 10px rgb(116 179 137 / 50%) !important',
    borderRadius: '0.5rem !important',
    textTransform: 'none !important',
    ['@media (max-width: 800px)']: {
      fontSize: '0.9rem !important',
      height: '2.2rem',
    },
    ['@media (max-width: 600px)']: {
      fontSize: '1.2rem !important',
    },
    ['@media (max-width: 600px)']: {
      height: '1.6rem',
      fontSize: '0.7rem !important',
    },
    ['@media (max-width: 480px)']: {
      height: '2.5rem',
      fontSize: '0.9rem !important',
    },
  },
  sectionHeader: {
    fontSize: '2.4rem !important',
    fontWeight: '600',
    color: '#1f755c',
    ['@media (max-width: 800px)']: {
      fontSize: '1.5rem !important',
    },
    ['@media (max-width: 600px)']: {
      fontSize: '1.2rem !important',
    },
    ['@media (max-width: 480px)']: {
      fontSize: '1.8rem !important',
    },
  },
  sectionBody: {
    fontSize: '1.25rem !important',
    ['@media (max-width: 800px)']: {
      fontSize: '1.1rem !important',
    },
    ['@media (max-width: 600px)']: {
      fontSize: '0.7rem !important',
    },
    ['@media (max-width: 480px)']: {
      fontSize: '0.9rem !important',
    },
  },
  imgBack: {
    ['@media (max-width: 480px)']: {
      display: 'none',
    },
  },
  btnBox: {
    marginTop: '6rem',
    ['@media (max-width: 800px)']: {
      marginTop: '5rem !important',
    },
  },
  textBox: {
    ['@media (max-width: 480px)']: {
      padding: '4rem',
    },
  },
  imgMobile: {
    display: 'none',
    ['@media (max-width: 480px)']: {
      display: 'block',
      filter: `blur(8px)`,
      webkitFilter: `blur(8px)`,
    },
  },
});

const HeroSection = () => {
  const classes = useStyles();

  const scrlTo = () => {
    window.scrollTo({
      top:
        document.getElementById('about').offsetTop -
        (window.pageYOffset <=
        document.getElementById('about').offsetTop
          ? 100
          : 120),
    });
  };

  return (
    <Box className={classes.root} id="home" sx={{ flexGrow: 1 }}>
      <img
        className={classes.imgMobile}
        src={`${process.env.PUBLIC_URL}/assets/images/home.png`}
        height="320px"
        style={{
          left: '0',
          right: '0',
          zIndex: '-5',
          position: 'absolute',
        }}
      />
      <Grid container>
        <Grid item xs={6} className={classes.imgBack}>
          <img
            width="100%"
            maxWidth={'47.5rem'}
            height="100%"
            src={`${process.env.PUBLIC_URL}/assets/images/home.png`}
            alt="hero img"
          />
        </Grid>

        <Grid item xs>
          <Box mt={6} className={classes.textBox}>
            <Typography className={classes.sectionHeader}>
              Welcome to Trikhal Udyogs Pvt. Ltd.
            </Typography>
            <Typography className={classes.sectionBody}>
              Trikhal Biodegradables...
              <i style={{ color: '#ff5821', fontWeight: '600' }}>
                We are not plastic...
              </i>
            </Typography>
          </Box>
          <Box
            className={classes.btnBox}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              className={classes.btnExplore}
              style={{ width: 'auto', fontSize: '1.09rem' }}
              variant="contained"
              onClick={scrlTo}
            >
              Explore Us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
