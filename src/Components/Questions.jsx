import React from 'react'
import "./QuestionsStyles.css";
import { Typography, Box, Paper, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
const Questions = () => {
    return (
        <div className="questions-wraper" id="questions">
            <Typography variant="h3" className="questionsHeading">F&Qs About COVID-19</Typography>
            
            <div className="inner-wraper">
                <Paper elevation={10} component={Box}>
                
                <Box className="singleAccordionWraper">
                <Accordion>
                    <Box className="accordionSummary">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        >
                        <Typography>What is COVID-19 ?</Typography>
                    </AccordionSummary>
                    </Box>
                    <AccordionDetails>
                    <Typography>
                        COVID-19 is the disease caused by a new coronavirus called SARS-CoV-2.  WHO first learned of this new virus on 31 December 2019, following a report of a cluster of cases of ‘viral pneumonia’ in Wuhan, People’s Republic of China.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </Box>
                <Accordion>
                    <Box className="accordionSummary">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>What are the Symptoms of Covid-19 ?</Typography>
                    </AccordionSummary>
                    </Box>
                    <AccordionDetails>
                        <Box>
                            <Typography>The most common symptoms are:</Typography>
                            <ul>
                                <li>Fever</li>
                                <li>Dry Cough</li>
                                <li>Fatigue</li>
                            </ul>
                            <Typography>Other symptoms are less common and may effect some patient includes:</Typography>
                            <ul>
                                <li>Loss of taste or smell</li>     
                                <li>Nasal congestion</li>
                                <li>Conjunctivitis</li>
                                <li>Sore throat</li>
                                <li>Headache</li>
                                <li>Muscle or joint pain</li>
                                <li>Different types of skin rash</li>
                                <li>Nausea or vomiting</li>
                                <li>Diarrhea</li>
                                <li>Chills or dizziness</li>
                            </ul>
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <Box className="accordionSummary">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>What happens to people who get Covid-19 ?</Typography>
                        </AccordionSummary>
                    </Box>
                    <AccordionDetails>
                    <Typography>
                        Among those who develop symptoms, most (about 80%) recover from the disease without needing hospital treatment. About 15% become seriously ill and require oxygen and 5% become critically ill and need intensive care.
                        <br /><br />
                        Complications leading to death may include respiratory failure, acute respiratory distress syndrome (ARDS), sepsis and septic shock, thromboembolism, and/or multiorgan failure, including injury of the heart, liver or kidneys.
                        <br /><br />
                        In rare situations, children can develop a severe inflammatory syndrome a few weeks after infection. 
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <Box className="accordionSummary">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>Who is at most risk of severe illness from covid-19 ?</Typography>
                        </AccordionSummary>
                    </Box>
                    <AccordionDetails>
                    <Typography>
                        People aged 60 years and over, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, obesity or cancer, are at higher risk of developing serious illness. 
                        <br /><br />
                        However, anyone can get sick with COVID-19 and become seriously ill or die at any age.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <Box className="accordionSummary">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>How long does it take to develop symptoms ?</Typography>
                        </AccordionSummary>
                    </Box>
                    <AccordionDetails>
                    <Typography>
                    The time from exposure to COVID-19 to the moment when symptoms begin is, on average, 5-6 days and can range from 1-14 days. This is why people who have been exposed to the virus are advised to remain at home and stay away from others, for 14 days, in order to prevent the spread of the virus, especially where testing is not easily available.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <Box className="accordionSummary">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>What is the difference between isolation and quarantine</Typography>
                        </AccordionSummary>
                    </Box>
                    <AccordionDetails>
                    <Typography>
                        Both isolation and quarantine are methods of preventing the spread of COVID-19.
                        <br /><br />
                        <strong>Quarantine</strong> is used for anyone who is a contact of someone infected with the SARS-CoV-2 virus, which causes COVID-19, whether the infected person has symptoms or not. Quarantine means that you remain separated from others because you have been exposed to the virus and you may be infected and can take place in a designated facility or at home. For COVID-19, this means staying in the facility or at home for 14 days.
                        <br /><br />
                        <strong>Isolation </strong>is used for people with COVID-19 symptoms or who have tested positive for the virus. Being in isolation means being separated from other people, ideally in a medically facility where you can receive clinical care.  If isolation in a medical facility is not possible and you are not in a high risk group of developing severe disease, isolation can take place at home. If you have symptoms, you should remain in isolation for at least 10 days plus an additional 3 days without symptoms. If you are infected and do not develop symptoms, you should remain in isolation for 10 days from the time you test positive. 
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </Paper>
            </div>
        </div>
    )
}

export default Questions
