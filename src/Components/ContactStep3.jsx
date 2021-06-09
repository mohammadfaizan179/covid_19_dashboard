import React, { Component } from 'react'
import {Grid, Typography, TextField, FormGroup, FormControlLabel, Checkbox, Box, Button} from "@material-ui/core";
import "./ContactStyles.css";

class ContactStep3 extends Component {
    render() {
        const {handleNext, handleBack, values, handleChange} = this.props;
        const {symptoms, healthCondition} = values;
        return (
            <>
                <Grid container spacing={3}>
                    {/* <Grid item xs={12} >
                    
                    </Grid> */}
                    <Grid item xs={12}>
                    <Typography color="textSecondary">Symptoms</Typography>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox  name="Cough" />}
                                label="Cough"
                            />
                            <FormControlLabel
                                control={<Checkbox  name="Fever" />}
                                label="Fever"
                            />
                            <FormControlLabel
                                control={<Checkbox  name="Cold" />}
                                label="Cold"
                            />
                            <FormControlLabel
                                control={<Checkbox  name="breatProblem" />}
                                label="Breath Problem"
                            />
                            <FormControlLabel
                                control={<Checkbox  name="Tiredness" />}
                                label="Tiredness"
                            />
                            <FormControlLabel
                                control={<Checkbox  name="Others" />}
                                label="Others"
                            />
                        </FormGroup>
                    </Grid>
                    
                    <Grid item xs={12} >
                        <Typography color="textSecondary">Describe your Health Condition</Typography>
                        
                        <TextField
                            id="condition"
                            margin="normal"
                            label="Describe your Health"
                            multiline
                            rows={4}
                            // defaultValue="Default Value"
                            variant="outlined"
                            fullWidth                            
                            value={healthCondition}
                            onChange={handleChange("healthCondition")}
                        />
                    </Grid>
                </Grid>
                <Box className="buttonWraper">
                    <Box className="buttonStep" >
                        <Button variant="contained" color="secondary" onClick={handleBack}>Back</Button>
                    </Box>
                    <Box className="buttonStep" >
                        <Button variant="contained" color="primary" onClick={handleNext}>Review</Button>
                    </Box>
                </Box>
            </>
        )
    }
}

export default ContactStep3
