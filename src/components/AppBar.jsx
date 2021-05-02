import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
    AppBar, Box, 
    Toolbar, Typography,
    CardMedia, IconButton
} from '@material-ui/core';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menuItemContainer : {
        display : 'flex',
        backgroundColor: "lightblue",
        height : "100%",
        margin : '0 5px',
        alignItems : "center",
        position : 'relative',
        '&:before' : {
            content : "''",
            width: '100%',
            border : '2px solid darkcyan',
            position : "absolute",
            bottom : "-2px",
            left : 0

        }
        
    },
    menuItem : {
        //display : "inline-block",
        color : 'rgb(40, 57, 73)',
        fontWeight : "bold",
        fontSize : '1.5rem',
        
        
    },
    appBar : {
        backgroundColor : "#fff"
    },
    toolBar : {
        //height: "100%",
        //display : 'flex',
        height: "70px",
       // backgroundColor : "red",
        padding : 0,
        margin : 0,
        

    },
    menuLogo : {
        marginRight: theme.spacing(10),

        
    }

  }),
);

export default function AppMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolBar} >
        < IconButton edge="start" className={classes.menuLogo} color="inherit" aria-label="menu">
                <CardMedia
                    component="img"
                    alt="DubiCars logo"
                    
                    image="../images/logo.svg"
                    title="DubiCars title"
                    width="40px"
                />
        </IconButton>
          
          <Box className={classes.menuItemContainer}>

          
            <Typography variant="h6" className={classes.menuItem}>
                Car News
            </Typography>
          </Box>
          <Box className={classes.menuItemContainer}>
            <Typography variant="h6" className={classes.menuItem}>
                Export
            </Typography>
          </Box>
          <Box className={classes.menuItemContainer}>
            <Typography variant="h6" className={classes.menuItem}>
                Value My Car
            </Typography>
          </Box>
          <Box className={classes.menuItemContainer}>
            <Typography variant="h6" className={classes.menuItem}>
                About Us
            </Typography>
          </Box>
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
