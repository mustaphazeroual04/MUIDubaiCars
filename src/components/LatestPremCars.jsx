import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import CarAnnounce from './CarAnnounce';
import { makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
    container : {
        //backgroundColor:"purple", 
        width:"100%",
        boxSizing:"border-box",
        [theme.breakpoints.up('sm')] : {
            width:"70%",
        }
    }
}));


const LatestPremCars = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container} >
            <Typography align="center" style={{color:"#283949", fontSize: '2.375rem', fontWeight: 700, textTransform: 'capitalize'}} >Latest Premium Cars</Typography>
            <Typography align="center" style={{color:"#283949", fontSize: 14, marginBottom: 30}} >360 EXTERIOR VIEWS</Typography>
            <Grid spacing={2} container >
                <Grid item sm={12} md={4}>
                    <CarAnnounce></CarAnnounce>
                </Grid>
                <Grid item sm={12} md={4}>
                    <CarAnnounce></CarAnnounce>
                </Grid>
                <Grid item sm={12} md={4}>
                    <CarAnnounce></CarAnnounce>
                </Grid>
                <Grid item sm={12} md={4}>
                    <CarAnnounce></CarAnnounce>
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default LatestPremCars;
