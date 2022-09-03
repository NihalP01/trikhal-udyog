import { Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

const useStyles = makeStyles({
  LandingCard2_main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '6px 8px 9px 1px rgb(0 0 0 / 10%) !important',
    width: '100%',
    transition: 'transform 0.25s ease-in-out !important',
    '&:hover': {
      transform: 'scale(1.02)',
      cursor: 'pointer',
    },
    '& .MuiCardMedia-img': {
      width: '100%',
      maxWidth: '190px',
    },
  },
  cardTitle: {
    fontSize: '1.15rem !important',
    ['@media (max-width: 800px)']: {
      fontSize: '0.9rem !important',
    },
    ['@media (max-width: 600px)']: {
      fontSize: '0.7rem !important',
    },
  },
});
const ProductCard = ({ props }) => {
  const classes = useStyles();

  return (
    <Card className={classes.LandingCard2_main}>
      <CardMedia
        style={{ padding: '4px' }}
        component="img"
        height="160"
        image={props.img}
        alt="img products"
      />
      <CardContent>
        <Typography
          gutterBottom
          className={classes.cardTitle}
          component="div"
        >
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
