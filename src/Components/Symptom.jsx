import React from 'react'
import {Typography, Box, Grid} from "@material-ui/core";
import "./SymptomsStyles.css";

const Symptom = ({pic, title}) => {
    return (
        <>
            <Grid item md={4} sm={6} xs={12}>
                <Box className="itemContainerSymptoms">
                    <img src={pic} alt="cough" width={120} height={160} />
                    <Typography className="picCaption" variant="body1" color="textSecondary">{title}</Typography>
                </Box>
            </Grid>    
        </>
    )
}

export default Symptom
