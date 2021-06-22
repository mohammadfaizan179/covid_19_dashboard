import React,{useEffect, useState} from 'react';
import NavbarComponent from "./Components/NavbarComponent";
import Head from "./Components/Head";
import About from "./Components/About";
import Symptoms from "./Components/Symptoms";
import Preventions from "./Components/Preventions";
import Questions from "./Components/Questions";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./Components/HeadStyles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {fetchData} from "./services/api";
import {makeStyles} from "@material-ui/core/styles";

import Cards from "./Components/Tracker/Cards";
import Chart from "./Components/Tracker/Chart";
import logo from "./images/logo.jpg";
import {Typography, Box} from "@material-ui/core";

/*------------------Styling_Start------------------------*/ 
const useStyles = makeStyles((theme)=>({
  container:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // border: "2px solid green",
  },
  
}))
/*------------------Styling_End------------------------*/ 
const App = () => {
  const classes = useStyles();
  const [data, setData] = useState({})
  const [country, setCountry] = useState("")
  
  useEffect(()=>{
    Aos.init({duration: 1500});

    const fetchedDataCall = async() =>{
      const data = await fetchData();
      setData(data);
    }
    fetchedDataCall();
  },[]);
  const handleCountryChange = async(country) =>{
    const fetchedData = await fetchData(country); //Since fetchData() is a async function therefore we have to add "await" before this fetchData() function and have to make "componentDidMount" function async also.
    // this.setState({data: fetchedData, country: country}) 
    setData(fetchedData);
    setCountry(country);
  }
  return (
      <>
        <div>
          {/* <Navbar/> */}
          <NavbarComponent />
          <Head />

          <div data-aos="fade-up">
            <About/>
          </div>
         
          <div data-aos="fade-right">
            <Symptoms />
          </div>
          
          <div data-aos="fade-right">
            <Preventions />
          </div>
          
          <div data-aos="fade-up">
            <Questions />
          </div>
          
          <div data-aos="fade-up" >
            <Contact />
          </div>
          
          <div data-aos="fade-up">
            <Box className={classes.container} id="dashboard"> 
              <Cards data={data} handleCountryChange={handleCountryChange}/>
            </Box>
          </div>
  
          <Footer />
        </div>
      </>
  );
}

export default App;
