import { Paper, Typography } from "@mui/material";

import (Paper)

/*function Car(){
    return(
        <h2> Hi, I am Mika Car.</h2>
    );
}*/



function Car(){
    return(
        <Paper elevation={3} sx={{padding:2, margin:2}}>
            <Typography variant="h6" gutterBottom>
                Hi, I am Mika Car.
            </Typography>
        </Paper>
    );
}

export default Car;