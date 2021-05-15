import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Tabs, Tab, Box, Typography, Grid } from '@material-ui/core';
//import Tab from '@material-ui/core/Tab';
//import TabContext from '@material-ui/lab/TabContext';
import {TabContext, TabList, TabPanel } from '@material-ui/lab';
//import TabPanel from '@material-ui/lab/TabPanel';
import FilterComponent from './filterComponent';
import LatestPremCars from './LatestPremCars';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    //flexGrow: 1,
    backgroundColor: 'darkcyan',
    width:"500px",
    height:"300px",
    //paddingLeft: "100px",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center"

  },
  tabRoot : {
      backgroundColor:"orange"
  },
  tabsRoot : {
      backgroundColor:"darkcyan",
      display: "flex",
      flexDirection:"row",
      width: '40%',
      borderTopLeftRadius: "30%",
      borderBottomLeftRadius : "10%"

  },
  
  container : {
      width:"400px",
      height:"300px",
      backgroundColor:"orange",
      position:"absolute",
      top:"150px",
      left:"200px"
  },
  
}));

export default function FinCar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    
      
    <Box  alignItems="center" flexDirection="column" style={{ display:"flex", minHeight: '100vh', backgroundColor:"white", width:"100%" }} >
        <Typography>Buy, Sell, Smile with Dubi Cars</Typography>
        <FilterComponent ></FilterComponent>
        <Box width="100%" height="250px" style={{}} ></Box>
        <LatestPremCars></LatestPremCars>
    </Box>

    
  );
}

