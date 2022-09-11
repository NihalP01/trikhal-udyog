import * as React from 'react';
import { makeStyles } from '@mui/styles';
import {
  AppBar,
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import { headerData } from '../../data/headerData';

const style = makeStyles((theme) => ({
  header_main: {
    '&.MuiAppBar-root': {
      boxshadow: 'none',
      maxHeight: '5rem',
    },
    ['@media (max-width: 800px)']: {
      display: 'none !important',
    },
  },
  headerTitle: {
    fontSize: '14px !important',
    cursor: 'pointer',
    fontWeight: 'bold !important',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

const NavBar = () => {
  const classes = style();

  const scrollToElement = (sectionId) => {
    const htmlEle = document.getElementById(`${sectionId}`);

    if (htmlEle) {
      window.scrollTo({
        top:
          htmlEle.offsetTop -
          (window.pageYOffset <= htmlEle.offsetTop ? 100 : 120),
      });
    }
  };

  return (
    <AppBar
      className={classes.header_main}
      position="fixed"    
      color="transparent" sx={{backdropFilter:"blur(30px)"}}
    >
      <Toolbar>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logos/logo.jpg`}
          width="40px"
        />

        <Grid
          container
          spacing={4}
          sx={{
            mx: 'auto',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {headerData.map((header, index) => {
            return (
              <Grid item key={index} className={classes.nvbarGrid}>
                <Box className={classes.navbarStyle}>
                  <Typography
                    className={classes.headerTitle}
                    component={'span'}
                    onClick={() => scrollToElement(header.link)}
                  >
                    {header.title}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
          {/* <Grid item>
            <Button
              variant="contained"
              style={{ textTransform: 'none' }}
              onClick={signUp}
            >
              Sign up
            </Button>
          </Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
