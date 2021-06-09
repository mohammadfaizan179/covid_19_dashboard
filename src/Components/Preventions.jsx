import React from 'react'
import "./PreventionsStyles.css";
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
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainer">
                        <img src={handwash} alt="cough" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">Wash you hands regularly for 20 seconds with soap and water or alcohal based hand rub</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainer">
                        <img src={mask} alt="fever" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">Cover your nose and mouth with a disposable tissue or flexd elbow when you cough or sneeze</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainer">
                        <img src={distance} alt="runnyNose" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">Avoid close contact(1 meter or 4 feet) with people who are unwell</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainer">
                        <img src={home} alt="breath" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">Stay home and self isolate from other in the household if you feel unwell</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainer">
                        <img src={touch} alt="cold" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">Don't touch your hand or elbow to your face especially nose </Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainer">
                        <img src={fever} alt="tired" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">If you have fever, cough and facing difficulty in breathing seek medical care early</Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Preventions
