import React,{useState} from 'react'
import "./NavbarComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import {Navbar, Nav} from "react-bootstrap";
import {Typography, Button} from "@material-ui/core";
import NavbarComponentSub from "./NavbarComponentSub";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const NavbarComponent = () => {
    const [navbar, setNavbar] = useState(false);
    
    const changeBackground = () =>{
        if(window.scrollY > 560){
            setNavbar(true);
        }else{
            setNavbar(false); 
        }
    };
    window.addEventListener("scroll", changeBackground);
     
    return (
        <>        
            <Navbar className={navbar ? "navbarWarper active" : "navbarWarper"} variant="dark" fixed="top" expand="md">
                  <Navbar.Brand style={{flexGrow: 30}} >
                        <Typography variant="h5" style={{marginLeft:"20px", fontFamily:"cursive"}}><span><Button component="a" href="https://mohammadfaizan179.github.io/portfolio/" className="portfolio_link"><ArrowBackIcon /></Button></span> Covid-19</Typography>
                  </Navbar.Brand>
                  <Navbar.Toggle style={{marginRight:"20px"}}/>
                  <Navbar.Collapse>
                    <div className="navLink">
                    <Nav>
                        <NavbarComponentSub title="About" to="covid" offset={-120}/>
                        <NavbarComponentSub title="Symptoms" to="symptoms" offset={-120}/>
                        <NavbarComponentSub title="Preventions" to="prevention" offset={-120}/>
                        <NavbarComponentSub title="F&Qs" to="questions" offset={-120}/>
                        <NavbarComponentSub title="Contact" to="cont" offset={-120}/>
                        <NavbarComponentSub title="Dashboard" to="dashboard" offset={-120}/>
                    </Nav>
                    </div>
                  </Navbar.Collapse>
            </Navbar>  
        </>
    )
}

export default NavbarComponent
