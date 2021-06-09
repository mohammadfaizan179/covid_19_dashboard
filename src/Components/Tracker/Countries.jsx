import React,{useEffect, useState} from 'react';
import { fetchCountries } from "../../services/api";
import { Typography, NativeSelect, FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const Countries = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);
    const classes = useStyles();

    useEffect(()=>{
        const fetchCountriesApi = async() =>{
            setCountries(await fetchCountries());   //fetchedCountries is async call therefore we have to have await before it and make "useEffect" async, but it is hook we can not make it async therefore we have to make another function
       }
       fetchCountriesApi();
    },[])
       
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <>  
            <NativeSelect onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="">United States</option>
                {countries.map((country,ind)=>{         // countries.map not working when internte not there
                    return(
                        <option value={country} key={ind}>{country}</option>
                    )
                })}
            </NativeSelect>
        </>
    )
}

export default Countries
