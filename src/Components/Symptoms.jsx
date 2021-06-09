import React from 'react'
import "./SymptomsStyles.css"
import {Typography, Box, Grid, makeStyles} from "@material-ui/core";
import cough from "../images/symptoms/cough.png";
import runnyNose from "../images/symptoms/runnyNose.png";
import breath from "../images/symptoms/breath.png";
import cold from "../images/symptoms/cold.jpg";
import fever from "../images/symptoms/fever.jpg";
import tired from "../images/symptoms/tired.png";

const Symptoms = () => {
    return (
        <div className="symptoms-wrapre" id="symptoms">
            <Typography variant="h3" className="symptomsHeading">Corona Virus Symptoms</Typography>
            <Grid container spacing={0} style={{padding: "32px 160px"}}>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainerSymptoms">
                        <img src={cough} alt="cough" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">Cough</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainerSymptoms">
                        <img src={fever} alt="fever" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">Fever</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainerSymptoms">
                        <img src={runnyNose} alt="runnyNose" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">Runny Nose</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainerSymptoms">
                        <img src={breath} alt="breath" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">Breath Problem</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainerSymptoms">
                        <img src={cold} alt="cold" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">Cold</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className="itemContainerSymptoms">
                        <img src={tired} alt="tired" width={120} height={160} />
                        <Typography variant="caption" color="textSecondary">Tiredness</Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Symptoms
