import React from 'react'
import "./PreventionsStyles.css";
import Prevention from "./Prevention";
import { Typography, Box, Grid } from "@material-ui/core";
import handwash from "../images/prevantions/handwash.png";
import mask from "../images/prevantions/mask1.png";
import distance from "../images/prevantions/distance1.png";
import home from "../images/prevantions/home2.jpg";
import touch from "../images/prevantions/touch1.jpg";
import fever from "../images/prevantions/fever.png";
const Preventions = () => {
    return (
        <div className="prevention-wraper" id="prevention">
            <Typography variant="h3" className="preventionHeading">Preventions Against Corona Virus</Typography>
            <Grid container spacing={0} style={{padding: "32px 160px"}}>
                <Prevention pic={handwash} content="Wash you hands regularly for 20 seconds with soap and water or alcohal based hand rub" />
                <Prevention pic={mask} content="Cover your nose and mouth with a disposable tissue or flexd elbow when you cough or sneeze" />
                <Prevention pic={distance} content="Avoid close contact(1 meter or 4 feet) with people who are unwell" />
                <Prevention pic={home} content="Stay home and self isolate from other in the household if you feel unwell" />
                <Prevention pic={touch} content="Don't touch your hand or elbow to your face especially nose" />
                <Prevention pic={fever} content="If you have fever, cough and facing difficulty in breathing seek medical care early" />
                
                
            </Grid>
        </div>
    )
}

export default Preventions
