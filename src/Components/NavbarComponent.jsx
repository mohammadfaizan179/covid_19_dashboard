import React from 'react'
import "./NavbarComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import {Navbar, Nav} from "react-bootstrap";
import {Typography} from "@material-ui/core";
import NavbarComponentSub from "./NavbarComponentSub";
// import logo from "../Images/logo.png"

const NavbarComponent = () => {
    return (
        <>        
            <Navbar className="navbarWarper" variant="dark" fixed="top" expand="md">
                  <Navbar.Brand style={{flexGrow: 30}} >
                        {/* <img src={logo} alt="logo" style={{marginLeft:"60px"}}/> */}
                        <Typography variant="h5" style={{marginLeft:"20px", fontFamily:"cursive"}}>Covid-19</Typography>
                  </Navbar.Brand>
                  <Navbar.Toggle style={{marginRight:"20px"}}/>
                  <Navbar.Collapse>
                    <div className="navLink">
                    <Nav>
                        {/* <NavbarComponentSub title="Home" to="covid" offset={-200}/> */}
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
