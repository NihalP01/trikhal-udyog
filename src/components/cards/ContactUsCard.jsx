import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  contactUsCard_main: {
    display: 'flex',
    maxWidth: '300px',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1.2rem',
    alignItems: 'center',

    '& div': {
      '& i': {
        fontSize: '2rem',
        padding: '8px',
        '@media (max-width: 800px)': {
          fontSize: '1.2rem !important',
        },
        '@media (max-width: 600px)': {
          fontSize: '1rem !important',
        },
        '@media (max-width: 480px)': {
          fontSize: '1.2rem !important',
        },
      },
    },
  },
  headingText: {
    fontSize: '1.2rem !important',
    fontWeight: '600',
    color: '#1f755c',
    marginBottom: '1.5rem !important',
    '@media (max-width: 800px)': {
      fontSize: '1.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem !important',
    },
  },
  typoBody: {
    fontSize: '1rem !important',
    '@media (max-width: 800px)': {
      fontSize: '0.9rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem !important',
    },
  },
});
const ContactUsCard = ({ item }) => {
  const classes = useStyles();
  return (
    <div className={classes.contactUsCard_main}>
      <div>
        <i
          className={item.icon}
          style={{ color: '#1f755c' }}
          aria-hidden="true"
        ></i>
        <Typography className={classes.headingText}>
          {item.header}
        </Typography>
      </div>
      <Typography className={classes.typoBody}>
        {item.content}
        <br />
        {item.content2}
        <br />
        {item.content3}
      </Typography>
    </div>
  );
};

export default ContactUsCard;
