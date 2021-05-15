import React, {useState} from 'react';
import { 
    Tabs, Tab, Box,
    Typography, makeStyles, 
    Grid, Theme, MenuItem,
    FormHelperText, FormControl,
    Select, InputLabel
} from '@material-ui/core';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) => ({
    
    container : {
        width:"50%",
        //height:"300px",
        backgroundColor:"transparent",
        //paddingLeft:"20px"
        //margin:"auto"
        [theme.breakpoints.down('sm')] : {
            width:"98%",
        },
        [theme.breakpoints.up('md')] : {
            width:"70%",
        }
    },
    tabsContainer : { 
        position:"relative", 
        top:2, 
        backgroundColor:"#283949", 
        borderTopColor:"#283949", 
        borderRightColor:"#283949", 
        borderRightColor:"transparent", 
        borderWidth:2, 
        borderTopStyle:"solid", 
        borderLeftStyle:"solid", 
        borderRightStyle:"solid", 
        borderLefttColor:"#283949", 
        flexDirection:"row", 
        width:"55%", 
        height:"40px", 
        borderTopLeftRadius:"25px", 
        borderTopRightRadius:"25px", 
        overflow:"hidden",
        [theme.breakpoints.down('sm')] : {
            width:"98%",
        },
        [theme.breakpoints.up('md')] : {
            width:"70%",
        }
    },
    itemTab : {
        backgroundColor:"transparent",
        color:"white",
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        borderTopLeftRadius:"25px",
        borderTopRightRadius:"25px",

    },
    formControl: {
        margin: theme.spacing(1),
        //flex:1
       // minWidth: 120,
        width:"80%"
      },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    searchButton : {
        background : 'linear-gradient(90deg, rgb(241,75,106), rgb(150,51,69))',
        //padding : '4px 15px',
        borderRadius : 20,
        height : "40px",
        cursor : "pointer",
        //width:"160px",
        '&:hover' : {
            background : "#f14b6a",
            
            //backgroundColor : "green" 
        }
    },
}));

const FilterComponent = () => {
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState(2);
    const tabClick = (newActiveTabIndex) => {
        setActiveTab(newActiveTabIndex);
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value);
    };
    return (
        <div className={classes.container} >
            <Grid container direction="row" className={classes.tabsContainer}  >
                <Grid xs={4}  onClick={() => {setActiveTab(1)}} style={activeTab == 1 ? {backgroundColor:"white",color:"#283949",} : {}}  classes={{root: classes.itemTab  }}      item>
                    <Typography style={{}}>Buy</Typography>
                </Grid>
                <Grid xs={4}  onClick={() => {setActiveTab(2)}} style={activeTab == 2 ? {backgroundColor:"white",color:"#283949",} : {}} classes={{root: classes.itemTab  }} item>
                    <Typography style={{}}>Sell</Typography>
                </Grid>
                <Grid xs={4}  onClick={() => {setActiveTab(3)}} style={activeTab == 3 ? {backgroundColor:"white",color:"#283949",} : {}} classes={{root: classes.itemTab  }} item>
                    <Typography style={{}}>Export</Typography>
                </Grid>
                
            </Grid>
            <Box boxShadow={24} flexDirection="column" style={{display : "flex", paddingBottom:"10px", width:"100%", height:"84%", backgroundColor:"white", borderColor:"#283949", borderStyle:'solid', borderWidth:2, borderBottomLeftRadius:"25px", borderBottomRightRadius:"25px", borderTopRightRadius:"25px", overflow:"hidden"}}>
                <Grid shadows container direction="row" justify="flex-start" alignItems="flex-start" style={{display : "flex", }}>
                        <Grid item md={3} xs={6}  >
                            
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">Make</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Totyota</MenuItem>
                                <MenuItem value={20}>Skoda</MenuItem>
                                <MenuItem value={30}>Audi</MenuItem>
                                <MenuItem value={30}>Honda</MenuItem>
                                </Select>
                                <FormHelperText>Some important helper text</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">Model</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Totyota</MenuItem>
                                <MenuItem value={20}>Skoda</MenuItem>
                                <MenuItem value={30}>Audi</MenuItem>
                                <MenuItem value={30}>Honda</MenuItem>
                                </Select>
                                
                            </FormControl>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">Seller Type</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>All</MenuItem>
                                <MenuItem value={20}>Dealer</MenuItem>
                                <MenuItem value={30}>Certified pre-owned</MenuItem>
                                <MenuItem value={30}>Owner</MenuItem>
                                </Select>
                                
                            </FormControl>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">Min Price</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>30 000</MenuItem>
                                <MenuItem value={20}>60 000</MenuItem>
                                <MenuItem value={30}>100 000</MenuItem>
                                <MenuItem value={30}>150 000</MenuItem>
                                </Select>
                                
                            </FormControl>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">MaxPrice</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>150 000</MenuItem>
                                <MenuItem value={20}>200 000</MenuItem>
                                <MenuItem value={30}>300 000</MenuItem>
                                <MenuItem value={30}>600 000</MenuItem>
                                </Select>
                                
                            </FormControl>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">Min Year</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>1970</MenuItem>
                                <MenuItem value={20}>1980</MenuItem>
                                <MenuItem value={30}>2000</MenuItem>
                                <MenuItem value={30}>2005</MenuItem>
                                </Select>
                                
                            </FormControl>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">Max Year</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>2000</MenuItem>
                                <MenuItem value={20}>2005</MenuItem>
                                <MenuItem value={30}>2010</MenuItem>
                                <MenuItem value={30}>2020</MenuItem>
                                </Select>
                                
                            </FormControl>
                        </Grid>
                </Grid>
                <Grid container >
                    <Grid item >
                        
                    </Grid>
                    <Grid item xs={12} md={2} style={{}} >
                        <Box display="flex" color="white" justifyContent="center" alignItems="center" className={classes.searchButton} >
                            <Typography  >
                                SEARCH
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default FilterComponent;
