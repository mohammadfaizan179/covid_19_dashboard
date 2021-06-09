import React,{Component} from 'react'
import "./ContactStyles.css"
import {Typography, Box, Paper, FormGroup, Button, FormControlLabel, Checkbox, Grid, Container, Stepper, Step, StepLabel, TextField} from "@material-ui/core";
import ContactStep1 from  "./ContactStep1";
import ContactStep2 from  "./ContactStep2";
import ContactStep3 from  "./ContactStep3";
import ContactStep4 from  "./ContactStep4";
import Submit from  "./Submit";

class Contact extends Component{

    state = {
        activeStep: 0,
        
        firstName : "",
        lastName: "",
        age: "",
        dob: "",
        gender: "",
        
        phone: "",
        email: "",
        address: "",

        symptoms: {},
        healthCondition: "",
    }
    render(){
    const {activeStep, firstName, lastName, age, phone, email, address, dob, gender, symptoms, healthCondition} = this.state;
    const values = {activeStep, firstName, lastName, age, phone, email, address, dob, gender ,symptoms, healthCondition};

    const handleNext = () =>{
        this.setState({activeStep: activeStep + 1});
    }
    const handleBack = () =>{
        // activeStep === 4 ? this.setState({activeStep: activeStep - 4}) : this.setState({activeStep: activeStep - 1});
        if(activeStep === 4){
            this.setState({firstName: ""})
            this.setState({lastName: ""})
            this.setState({age: ""})
            this.setState({dob: ""})
            this.setState({gender: ""})
            this.setState({phone: ""})
            this.setState({email: ""})
            this.setState({address: ""})
            this.setState({activeStep: activeStep - 4})
        }else{
            this.setState({activeStep: activeStep - 1})
            
        }
    
    }
    const handleChange = input => e =>{
        this.setState({[input]: e.target.value});       //Understand it
    }
    
    const getSteps = () => {
        return ["Personal Information", "Contact Information", "Health Information", "Review" ]
    }
    const steps = getSteps();
    
    const getStepContent = (step) =>{
        switch(step){
            case 0:
                return(
                    <ContactStep1 handleNext={handleNext} handleBack={handleBack} values={values} handleChange={handleChange} />
                );
            case 1:
                return(
                    <ContactStep2 handleNext={handleNext} handleBack={handleBack} values={values} handleChange={handleChange}  />
                );    
            case 2:
                return(
                    <ContactStep3 handleNext={handleNext} handleBack={handleBack} values={values} handleChange={handleChange}  />
                );
            case 3:
                return(
                    <ContactStep4 handleNext={handleNext} handleBack={handleBack} values={values} handleChange={handleChange}  />
                );
            case 4:
                return(
                    <Submit handleNext={handleNext} handleBack={handleBack} values={values} handleChange={handleChange} />      
                );
            default: return ""
        }
    }
    
    return (
        <div id="cont">
        <Box className="form-wraper">
            <Typography variant="h3" className="questionsHeading">Contact Us</Typography>
            <Box className="form-inner-wrapper" p={4}>
                <Paper component={Box} p={3} elevation={10}>
                    <Stepper activeStep={activeStep}>
                        {
                            steps.map((step,index)=>{
                                return(
                                    <Step>
                                        <StepLabel>{step}</StepLabel>
                                    </Step>
                                        
                                )
                            })
                        }

                    </Stepper>
                    
                    <Box className="inputField">
                        <form>{getStepContent(activeStep)}</form>   
                    </Box>
                    
                    
            
                </Paper>
            </Box>
        </Box>
        </div>
    )
    }
}

export default Contact
