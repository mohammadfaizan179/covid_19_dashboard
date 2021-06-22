import React, { Component } from 'react'
import {Grid, TextField, Box, Button, Typography} from "@material-ui/core";
import "./ContactStyles.css";


const options = [
    {key:"", value:""},
    {key:"Male", value:"Male"},
    {key:"Female", value:"Female"},
    {key:"Other", value:"Other"},
    
  ];

class ContactStep1 extends Component {

    render() {
        const {handleNext, handleBack, values, handleChange} = this.props;
        const {activeStep, firstName, lastName, age, dob, gender} = values;
        
        return (
            <>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        helperText="Please write First Name"
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        // name="firstName"
                        value={firstName}
                        onChange={handleChange("firstName")}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        helperText="Please write Last Name"
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        // name="lastName"
                        value={lastName}
                        onChange={handleChange("lastName")}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        helperText="Please write Age"
                        id="age"
                        label="Age"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        // name="age"
                        value={age}
                        onChange={handleChange("age")}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            helperText="Date of Birth"
                            id="date"
                            margin="normal"
                            variant="outlined"
                            label="Birthday"
                            type="date"
                            fullWidth
                            value={dob}
                            onChange={handleChange("dob")}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        select
                        fullWidth
                        margin="normal"
                        label="Gender"
                        value={gender}
                        onChange={handleChange("gender")}
                        SelectProps={{
                        native: true,
                        }}
                        helperText="Select Your Gender"
                        variant="outlined"
                    >
                        {options.map((option) => (
                        <option key={option.key} value={option.value}>
                            {option.key}
                        </option>
                        ))}
                    </TextField>
                    </Grid>
                </Grid>
                <Box className="buttonWraper">
                    <Box className="buttonStep" >
                        <Button variant="contained" color="secondary" onClick={handleBack} disabled={activeStep === 0 } >Back</Button>
                    </Box>
                    <Box className="buttonStep" >
                        <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
                    </Box>
                </Box>
            </>
        )
    }
}

export default ContactStep1
