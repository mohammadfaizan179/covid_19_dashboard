import React, { Component } from 'react'
import "./ContactStyles.css";
import thanks from "../images/header/thanks.jpg";
import {Box, Button,Typography} from "@material-ui/core";
import "./ContactStyles.css";

export class Submit extends Component {
    render() {
        const {handleNext, handleBack, values, handleChange} = this.props;
        const {activeStep, firstName, lastName, age, dob, gender, phone, email, address} = values;
        
        // const clear = () =>{
        //     activeStep = activeStep -4;
        // }
        return (
            <>
                <Box className="submitForm">
                    <Typography variant="h4">Form Submited Succesfully</Typography>
                    <img src={thanks} alt="submit" width={250} height={250} style={{marginBottom: "10px"}} />
                    <Button variant="outlined" color="primary" onClick={handleBack}>Clear</Button>
                    {/* <Button variant="contained" color="primary" >{activeStep}</Button> */}
                    
                </Box>
            </>
        )
    }
}

export default Submit
