import React from 'react';
import "./SymptomsStyles.css";
import Symptom from "./Symptom";
import {Typography, Box, Grid} from "@material-ui/core";
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
                <Symptom title="Cough" pic={cough}/>
                <Symptom title="Fever" pic={fever}/>
                <Symptom title="Runny Nose" pic={runnyNose}/>
                <Symptom title="Breath Problem" pic={breath}/>
                <Symptom title="Cold" pic={cold}/>
                <Symptom title="Tiredness" pic={tired}/>
            </Grid>
        </div>
    )
}

export default Symptoms
