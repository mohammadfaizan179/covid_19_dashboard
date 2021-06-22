import React, { Component } from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Box, Typography, Grid} from "@material-ui/core";
import "./ContactStyles.css";
import { PhoneAndroid } from '@material-ui/icons';

class ContactStep4 extends Component {
    render() {
        const {handleNext, handleBack, values, handleChange} = this.props;
        const {firstName, lastName, age, dob, gender, phone, email, address, symptoms, healthCondition} = values;
        
        return (
            <>
                <Box className="contactStep4">
                        <Grid item>
                            <Typography variant="subtitle1"><strong> First Name:</strong>{firstName}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"><strong>Last Name:</strong> {lastName}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"><strong>Age:      </strong> {age}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"><strong>DOB:     </strong>  {dob}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"><strong>Gender:   </strong> {gender}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"><strong>Phone:    </strong> {phone}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"><strong>Email:    </strong> {email}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"><strong>Address:  </strong> {address}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"><strong>Health Condition: </strong> {healthCondition}</Typography>
                        </Grid>
                </Box>
                    {/* </Grid> */}
                    <br />
                    <Box className="buttonWraper">
                        <Box className="buttonStep" >
                            <Button variant="contained" color="secondary" onClick={handleBack}>Back</Button>
                        </Box>
                        <Box className="buttonStep" >
                            <Button variant="contained" color="primary" onClick={handleNext}>Submit</Button>
                        </Box>
                    </Box> 
            </>                             
        )
    }
}

export default ContactStep4
