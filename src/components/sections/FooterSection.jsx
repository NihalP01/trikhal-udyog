import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { socialMedia } from '../../data/socialMedia';

const useStyles = makeStyles({
  socialIcon: {
    fontSize: '1.8rem',
    ['@media (max-width: 800px)']: {
      fontSize: '1.4rem !important',
    },
    ['@media (max-width: 600px)']: {
      fontSize: '1.2rem !important',
    },
  },
});

const FooterSection = () => {
  const classes = useStyles();
  return (
    <Box p={3} style={{ background: '#ecffee' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="body2" color="primary">
            {'© Copyright © '}
            <Link color="inherit" to="/">
              trikhal.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'. All Rights Reserved'}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid
            container
            spacing={4}
            style={{ justifyContent: 'center' }}
          >
            {socialMedia.map((social) => (
              <Grid item key={social.id}>
                <a
                  href={social.link}
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  rel="noreferrer"
                >
                  <social.icon
                    className={classes.socialIcon}
                    style={{ color: 'green', fontSize: '1.8rem' }}
                  />
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterSection;
