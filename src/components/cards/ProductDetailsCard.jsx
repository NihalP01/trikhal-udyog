import { Box, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const useStyles = makeStyles({
  LandingCard2_main: {
    padding: '2rem',
    display: 'flex',
    // transition: 'transform 0.25s ease-in-out !important',
    // '&:hover': {
    //   transform: 'scale(1.02)',
    //   cursor: 'pointer',
    // },
    // '& .MuiCardMedia-img': {
    //   width: '100%',
    //   maxWidth: '190px',
    // },
  },
  cardTitle: {
    fontSize: '2rem !important',
    '@media (max-width: 800px)': {
      fontSize: '1.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem !important',
      textAlign: 'center !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem !important',
      textAlign: 'center !important',
    },
  },
  cardDesc: {
    fontSize: '1.1rem !important',
    '@media (max-width: 800px)': {
      fontSize: '1.1rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem !important',
    },
  },
  backBtn: {
    background: '#1f755c',
    width: '2rem',
    padding: '0.2rem',
    borderRadius: '300px',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: '12rem',
    '@media (max-width: 800px)': {
      marginLeft: '5rem',
    },
    '@media (max-width: 600px)': {
      marginLeft: '2rem',
    },
    '@media (max-width: 480px)': {
      marginLeft: '2rem',
    },
  },
});

const ProductDetailsCard = ({ props }) => {
  const classes = useStyles();
  //implementing the back button
  const handleBack = (e) => {
    window.history.back();
  };

  return (
    <div>
      <Box onClick={(e) => handleBack(e)} mt={12} className={classes.backBtn}>
        <ArrowBackIcon style={{ color: 'white' }} />
      </Box>
      <Box>
        {/* product detials */}
        <Box className={classes.LandingCard2_main}>
          <Grid container spacing={4} justifyContent={'center'}>
            <Grid
              item
              border={'1px solid green'}
              borderRadius="0.4rem"
            >
              <img height={'300px'} src={props.img} />
            </Grid>
            <Grid item>
              <Typography
                align="left"
                fontWeight={'bold'}
                className={classes.cardTitle}
              >
                {props.title}
              </Typography>
              <Typography
                mt={1}
                align="left"
                className={classes.cardDesc}
              >
                {props.desc}
              </Typography>
              <Box
                mt={4}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography>Want to order this product ? </Typography>
                <Box
                  width="100%"
                  mt={2}
                  maxWidth={'16.25rem'}
                  pl={6}
                  pr={6}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Button
                    startIcon={<CallIcon />}
                    variant="contained"
                  >
                    Call
                  </Button>
                  <Button
                    startIcon={<WhatsAppIcon />}
                    variant="contained"
                  >
                    Whatsapp
                  </Button>
                </Box>
              </Box>
              <Typography mt={6} onClick={(e) => alert('wduwb')}>
                How to order ?
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* how to order */}
      </Box>
    </div>
  );
};

export default ProductDetailsCard;
