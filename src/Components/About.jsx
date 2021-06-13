import React from 'react'
import { ThemeProvider, Typography, Box, Grid } from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import aboutPic from "../images/header/about3.png"
import rotate from "../images/header/rotate.jpg"
import "./aboutStyles.css";
import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
      },
    },
})

const About = () => {
    return (
        <>
        <div className="aboutContainer" id="covid">
            <Typography variant="h3" className="heading">About C <span><img src={rotate} alt="covidRotate" className="rotatingPic" /></span> VID-19</Typography>
           
            <ThemeProvider theme={theme}>
            <Grid container spacing={0} className="grid-wraper">
                <Grid item md={6} xs={12} className="grid-item-wraper">
                    <img src={aboutPic} alt="aboutPic" className="aboutImg"/>
                </Grid>
                <Grid item md={6} xs={12} className="grid-item-wraper">
                    <Typography className="aboutText" variant="h5">What is COVID-19 ?</Typography>
                    <br />
                    <Typography className="aboutText" variant="body1">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</Typography>
                    <br />
                    <Typography className="aboutText" variant="body1"> 
                    Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</Typography>
                    <br />
                    <Typography className="aboutText" variant="body1">The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads.</Typography>
                </Grid>    
            </Grid>
            </ThemeProvider>
        
        </div>
        </>
    )
}

export default About
