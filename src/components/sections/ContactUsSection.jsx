import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { contactData } from '../../data/contactData';
import { Cards } from '../cards/Cards';

const useStyles = makeStyles({
  contactus_main: {
    '& .MuiGrid-spacing-xs-3': {
      margin: 0,
    },
    width: '100%',
    background: '#ecffee',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 0',
  },
  headingText: {
    fontSize: '1.8rem !important',
    fontWeight: '600',
    color: '#1f755c',
    marginBottom: '1.5rem !important',
    ['@media (max-width: 800px)']: {
      fontSize: '1.2rem !important',
    },
    ['@media (max-width: 600px)']: {
      fontSize: '1rem !important',
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
  },
});

const ContactUsSection = () => {
  const classes = useStyles();
  return (
    <Box>
      <div className={classes.contactus_main} id="contact">
        <Typography className={classes.headingText}>
          Have a question about our products?
        </Typography>
        <Typography className={classes.typoBody}>
          Whether you've got questions or comments, or just want to
          say hi - we'd love to hear from you!
        </Typography>
      </div>
      <Grid
        container
        spacing={4}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {contactData.map((contact) => (
          <Grid item key={contact.header}>
            <Cards.ContactUsCard item={contact} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactUsSection;
