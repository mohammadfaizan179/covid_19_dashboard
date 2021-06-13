import React,{useEffect, useState} from 'react';
import { fetchCountries } from "../../services/api";
import { Typography, NativeSelect, FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import "../Tracker/Cases.css";


const Countries = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const fetchCountriesApi = async() =>{
            setCountries(await fetchCountries());   //fetchedCountries is async call therefore we have to have await before it and make "useEffect" async, but it is hook we can not make it async therefore we have to make another function
       }
       fetchCountriesApi();
    },[])
    return (
        <>  
            <NativeSelect onChange={(e)=> handleCountryChange(e.target.value)} >
                <option value="">United States</option>
                {countries.map((country,ind)=>{         // countries.map not working when internte not there
                    return(
                        <option className="countryList" value={country} key={ind}>{country}</option>
                    )
                })}
            </NativeSelect>
        </>
    )
}

export default Countries
