import React from 'react'
import { Label } from '@material-ui/icons';
import { Box } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container:{
        width: "65%",
        marginTop: 30,

    }
})


const Chart = ({data:{confirmed, deaths, recovered}}) => {
    const classes = useStyles();
    console.log("Inside Chart");
    // console.log(confirmed.value);
    return (
        <Box className={classes.container}>
        {
            confirmed ? (
            <Bar 
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: "Cases",
                        data: [confirmed.value, recovered.value, deaths.value],
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                    }]       
                }}
                options= {{
                    legend: {display: false},
                    title: {display: true, text: "Current state in country"},
                }}
            />) : ""
        }
        </Box>  
    )
}

export default Chart
