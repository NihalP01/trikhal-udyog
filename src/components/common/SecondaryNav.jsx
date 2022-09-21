import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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

const SecondaryNav = () => {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.header_main}
      position="fixed"
      color="transparent"
      sx={{ backdropFilter: 'blur(30px)' }}
    >
      <Toolbar>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logos/logo.png`}
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
          <Grid item className={classes.nvbarGrid}>
            <Box className={classes.navbarStyle}>
              <Link style={{textDecoration: 'none'}} to='/'>
                <Typography
                  className={classes.headerTitle}
                  component={'span'}
                >
                  Home
                </Typography>
              </Link>
            </Box>
          </Grid>
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

export default SecondaryNav;
