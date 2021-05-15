import React from 'react';
import { Box, CardMedia, Typography, Avatar, Badge } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import bmw from '../images/bmw.jpg';
import { deepOrange, deepPurple,  } from '@material-ui/core/colors';



const useStyles = makeStyles((theme: Theme) => ({
    container : {
        height:295, 
        width:"100%", 
        backgroundColor:"white",
        borderColor:"#ffc001",
        borderStyle:"solid",
        borderWidth:4,
        position:"relative"
    },
    media: {
        height: 170,
        position: "relative"
    },
    imgCount : {
        //color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: 'transparent',
        width: theme.spacing(3),
        height: theme.spacing(3),
        fontSize: theme.spacing(2),
        position: "absolute",
        left: 10,
        bottom : 10
    }
}));

const CarAnnounce = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container} >
            <CardMedia
                className={classes.media}
                image={bmw}
                title="BMW Car"
            >
                {/* <Badge badgeContent={4} color="primary"></Badge> */}
                <Avatar className={classes.imgCount}>15</Avatar>
            </CardMedia>
            <Box style={{ width:"100%",  boxSizing:"border-box", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingLeft:3, paddingRight:5 }} >
                <Typography style={{color: "#F14B6A", fontWeight: 700, fontSize: 20}} >AED 1,554,000</Typography>
                <Typography style={{color: "#ababab", fontSize: 11}} >23rd Mar</Typography>
            </Box>
            <Typography style={{color: "#283949", fontSize: 16 }} >
                Rolls-Royce Ghost 6.6L V12 | WARRANTY & SERVICE CONTRACT
            </Typography>

            <Box style={{position:"absolute", fontSize: "1.0rem", fontWeight: 400, textTransform: "uppercase", display:"flex", top:-10, left:-8, justifyContent:"center", paddingLeft: 7, paddingRight: 7, paddingTop: 1, paddingBottom: 1,  backgroundColor:"#ffc001",  }} >
                <Typography style={{color:"white"}}  >
                    PREMIUM
                </Typography>
            </Box>
            
        </Box>
    )
}

export default CarAnnounce;
