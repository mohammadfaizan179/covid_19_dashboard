import React from "react";
import { Typography, Box, CircularProgress, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardComponent from "./CardComponent";
import Countries from "./Countries";
import Chart from "./Chart";
import "../Tracker/Cases.css";


const useStyles = makeStyles((theme)=>({
    cardsWraper:{
        // border: "2px solid blue",
        margin: "40px 0",
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
    },
    trackerUpdateHeading:{
        margin: "0 0 30px 0",    
    },



}))
const Cards = ({data, handleCountryChange}) =>{
    const classes = useStyles();
    const {confirmed, deaths, recovered, lastUpdate} = data;   
    if(!confirmed){
        return <CircularProgress />;
    }
    return(
        <>
            <Box className={classes.cardsWraper}> 
                <Typography variant="h4" className="trackerCardsHeading">Corona Virus Cases By Country</Typography>
                <Typography className={classes.trackerUpdateHeading} variant="caption">Last Updated: { lastUpdate && new Date(lastUpdate).toDateString()}</Typography>    
                <Box className="countries">
                    <Countries handleCountryChange={handleCountryChange} />         
                </Box>
            
                <Grid 
                    container  
                    justify="center"
                >
                    <CardComponent
                        cardTitle="infected"
                        value={confirmed.value}
                        desc="Number of Infected Cases Covid-19"
                        lastUpdate={lastUpdate}
                    />
                    <CardComponent 
                        cardTitle="Recoverd"
                        value={recovered.value}
                        desc="Number of Recoverd Cases Covid-19"
                        lastUpdate={lastUpdate}
                    />
                    <CardComponent 
                        cardTitle="Deaths"
                        value={deaths.value}
                        desc="Number of Death Cases Covid-19"
                        lastUpdate={lastUpdate}
                    />
                </Grid>
                <Chart data={data}/>
            </Box>

        </>
    );
};

export default Cards;


