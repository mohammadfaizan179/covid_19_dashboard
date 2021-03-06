import React from 'react'
import { Typography, Box, Grid } from "@material-ui/core";

const Prevention = ({pic, content}) => {
    return (
        <>
            <Grid item md={4} sm={6} xs={12}>
                <Box className="itemContainer">
                    <img src={pic} alt="cough" width={120} height={160} />
                    <Typography className="prePicText" variant="body1" color="textSecondary" style={{paddingTop:"10px"}}>{content}</Typography>
                </Box>
            </Grid>    
        </>
    )
}

export default Prevention
