import React from 'react';
import { Grid, CardContent, Typography, Box, Card, makyStyles, makeStyles } from "@material-ui/core";
import CountUp from "react-countup";
import "../Tracker/Cases.css";

const CardComponent = ({cardTitle, value, desc, lastUpdate}) => {
    return (
    <>
        <Grid component={Card}  elevation={6} style={{margin:20, borderBottom: "10px solid #e0e0e0"}}>
            <Box className="header">
                <Typography variant="h5">{cardTitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant="h5">
                    <CountUp 
                        start={0}
                        end={value}
                        duration={3}
                        separator=","
                    />
                </Typography>
                <Typography style={{padding: "8px 2px"}}>{desc}</Typography>
                <Typography style={{padding: "0px 2px"}} variant="caption">{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    </>
    )
}

export default CardComponent;
