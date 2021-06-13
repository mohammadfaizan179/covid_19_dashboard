import React from 'react'
import { Label } from '@material-ui/icons';
import { Box } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import {makeStyles} from "@material-ui/core/styles";
import "../Tracker/Cases.css";

const Chart = ({data:{confirmed, deaths, recovered}}) => {
    return (
        <Box className="chartContainer">
        {
            confirmed ? (
            <Bar className="chartBar"
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
