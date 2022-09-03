import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  aboutUsCard_main: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '10px',
    width: '100%',
    alignItems: 'center',
    transition: 'transform 0.4s ease-in-out',
    boxShadow: '0px 2px 15px rgb(0 0 0 / 10%)',
    '&:hover': {
      transform: 'scale(1.02)',
      cursor: 'pointer',
    },
    '& i': {
      fontSize: '2rem',
      padding: '8px',
    },
  },
});
const AboutUsCard = ({ item }) => {
  const classes = useStyles();
  return (
    <Card elevation={3} className={classes.aboutUsCard_main}>
      <CardContent>
        <i
          className={item.icon}
          style={{ color: '#1f755c' }}
          aria-hidden="true"
        ></i>
        <Typography>{item.header}</Typography>
      </CardContent>
    </Card>
  );
};

export default AboutUsCard;
