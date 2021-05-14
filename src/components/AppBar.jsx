import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
    AppBar, Box, 
    Toolbar, Typography,
    CardMedia, IconButton,
    Icon
} from '@material-ui/core';
import dubiCarsLogo from "../images/logo.svg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


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
        //backgroundColor: "lightblue",
        height : "100%",
        margin : '0 10px',
        alignItems : "center",
        position : 'relative',
        color : 'rgb(40, 57, 73)',
        '&:before' : {
            content : "''",
            display : 'none',
            width: '97%',
            border : '3px solid darkcyan',
            position : "absolute",
            bottom : "-2px",
            left : 0

        },
        '&:hover' : {
            color : "#f14b6a",
            
            '&:before' : {
                borderColor : '#f14b6a',
                display : 'flex',
            }   
        }
        
    },
    menuItem : {
        //display : "inline-block",
        color : 'inherit',
        fontWeight : 100,
        padding : '0 10px',
        fontSize : '1.1rem',
        
        
    },
    appBar : {
        backgroundColor : "#fff"
    },
    toolBar : {
        //height: "100%",
        display : 'flex',
        justifyContent : "space-between",
        //flexWrap : 'nowrap',
        height: "60px",
       // backgroundColor : "red",
        padding : '0 3rem',
        margin : 0,
        

    },
    menuLogo : {
        marginRight: theme.spacing(2),

        
    },
    imageIcon: {
        height: "90%",
        width: '90%'
    },
    iconRoot: {
        textAlign: 'center',
        //backgroundColor: 'lightblue',
        width : '4rem',
        height : '3rem',
        margin : '5px 0px 5px 0px'
    },
    sellButton : {
        backgroundColor : "#f14b6a",
        padding : '4px 15px',
        borderRadius : 20,
        '&:hover' : {
            background : 'linear-gradient(90deg, rgb(241,75,106), rgb(150,51,69))',
            //backgroundColor : "green" 
        }
    },
    
    itemsContainer : {
        display : 'flex',
        flexDirection : 'row',
        height : '100%'
    }

  }),
);

export default function AppMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolBar} >
        <Box className={classes.itemsContainer}  >
            < IconButton edge="start" className={classes.menuLogo} color="inherit" aria-label="menu">
                <Icon classes={{root: classes.iconRoot}}>
                    <img className={classes.imageIcon} src={dubiCarsLogo}/>
                </Icon>
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
                    <Link to="/findCar">About Us </Link>
                </Typography>
            </Box>
            <Box className={classes.menuItemContainer}>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/login">LOGIN </Link>
                </Typography>
            </Box>
        </Box>
        
        <Box>
            <Box className={classes.sellButton} >
              <Typography>
                  SELL MY CAR
              </Typography>
          </Box>
        </Box>
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
