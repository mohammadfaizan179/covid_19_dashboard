import React, { Component } from 'react'
import {Grid, TextField, Box, Button} from "@material-ui/core";
import "./ContactStyles.css";

class ContactStep2 extends Component {
    render() {
        const {handleNext, handleBack, values, handleChange} = this.props;
        const {phone, email, address} = values;
        
        return (
            <>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        id="phone-number"
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        // name="phone"
                        value={phone}
                        onChange={handleChange("phone")}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        // name="Email"
                        value={email}
                        onChange={handleChange("email")}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        id="address"
                        label="Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        // name="address"
                        value={address}
                        onChange={handleChange("address")}
                    />
                    </Grid>
                </Grid>
                <Box className="buttonWraper">
                    <Box className="buttonStep" >
                        <Button variant="contained" color="secondary" onClick={handleBack}>Back</Button>
                    </Box>
                    <Box className="buttonStep" >
                        <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
                    </Box>
                </Box>
            </>
        )
    }
}

export default ContactStep2
