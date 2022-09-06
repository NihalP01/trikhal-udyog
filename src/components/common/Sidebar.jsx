import {
  AppBar,
  Box,
  Toolbar,
  Divider,
  List,
  IconButton,
  SwipeableDrawer,
  Grid,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { headerData } from '../../data/headerData';

// interface ISidebar {}

const useStyles = makeStyles((theme) => ({
  mobileHeaderMain: {
    display: 'none',
    ['@media (max-width: 800px)']: {
      display: 'block',
    },
  },
  appBar: {
    '&.MuiAppBar-root': {
      boxShadow: 'none',
    },
  },
  logo: {
    width: '100%',
    maxWidth: '3rem !important',
  },
  navbarStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  typography: {
    fontSize: '1.3rem',
    ['@media (max-width: 900px)']: {
      fontSize: '0.8rem !important',
    },
  },
  icons: {
    fontSize: '1.6rem',
    ['@media (max-width: 600px)']: {
      fontSize: '1rem',
    },
  },
  active: {
    color: theme.palette.primary.main,
  },

  notActive: {
    color: 'grey',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleDrawer = (open) => (e) => {
    if (
      e.type === 'keydown' &&
      (e.key === 'Tab' || e.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.mobileHeaderMain}>
      <AppBar
        style={{ background: 'white' }}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar onKeyDown={toggleDrawer(false)}>
          <Link to="/">
            <img
              className={classes.logo}
              src={`${process.env.PUBLIC_URL}/assets/logos/logo.jpg`}
              
              alt="trikhal logo"
            />
          </Link>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconButton color="primary" onClick={handleToggle}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>

      {isOpen && (
        <SwipeableDrawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <List sx={{ width: 150 }}>
            <IconButton
              sx={{ float: 'right' }}
              onClick={handleToggle}
            >
              <ChevronLeftIcon />
            </IconButton>

            <Divider sx={{ marginTop: 5 }} />
            {headerData.map((header, index) => (
              <NavLink
                to={header.link}
                key={index}
                className={(navData) =>
                  navData.isActive
                    ? classes.active
                    : classes.notActive
                }
                onClick={handleToggle}
                style={{ textDecoration: 'none' }}
              >
                <Box className={classes.navbarStyle} p={2}>
                  <Typography
                    className={classes.typography}
                    component={'span'}
                    onClick={() => scrollToElement(header.link)}
                  >
                    {header.title}
                  </Typography>
                </Box>
              </NavLink>
            ))}
          </List>
        </SwipeableDrawer>
      )}
    </Box>
  );
};

export default Sidebar;
