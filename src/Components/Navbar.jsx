import React from 'react'
import {AppBar, Toolbar, Typography,IconButton, Button } from "@material-ui/core";
import { Link, animateScroll as scrol} from "react-scroll"
import { makeStyles } from "@material-ui/core/styles";
import "./Navbar.css";

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow: 1
    },
    itemSpacing:{
        margin: theme.spacing(1)
    },
    active:{
        borderBottom: "1px solid #333",
    }
}))

const Navbar = () => {
    const classes = useStyles();
    
    return (
        <>
            <div className="root-wraper">
            <AppBar position="fixed">
                <Toolbar>
                    {/* <img src={logo} alt="logo" width={200} classNamez/> */}
                    <Typography variant="h3" className={classes.root}>Covid-19</Typography>
                    <div className="nav-item">
                    <Link
                        activeClass="active"
                        to="covid"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={1000}
                        className={classes.itemSpacing}
                    >
                        Covid-19
                    </Link>
                   
                    <Link
                        activeClass="active"
                        to="symptoms"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        className={classes.itemSpacing}
                    >
                        Symptoms
                    </Link>
                    <Link
                        activeClass="active"
                        to="prevention"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        className={classes.itemSpacing}
                    >
                        Prevention
                    </Link>
                    <Link
                        activeClass="active"
                        to="questions"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={1000}
                        className={classes.itemSpacing}
                    >
                        F&Qs
                    </Link>
                    
                    <Link
                        activeClass="active"
                        to="cont"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={1000}
                        className={classes.itemSpacing}
                    >
                        Contact US
                    </Link>

                    <Link
                        activeClass="active"
                        to="dashboard"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={1000}
                        className={classes.itemSpacing}
                    >
                        Dashboard
                    </Link>
                    </div>
                </Toolbar>
            </AppBar>
            </div>
        </>
    )
}

export default Navbar
