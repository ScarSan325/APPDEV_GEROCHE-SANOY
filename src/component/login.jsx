import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


function Loginform() {
    return(
        <Card sx={{maxWidth: 400, margin:2}}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" gutterBottom>
                Login
                </Typography>
                <Box component="form">
                    <TextField
                        fullWidth
                        label="Username"
                        name='username'
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        name='password'
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit" sx={{mt:2}}>
                        Login
                        </Button>
                        
                </Box>
            </CardContent>
        </CardActionArea>
        </Card>

    )
}


function SignUpform() {
    return(
        <Card sx={{maxWidth: 400, margin:2}}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" gutterBottom>
                Register
                </Typography>
                <Box component="form">
                    <TextField
                        fullWidth
                        label="Email"
                        name='email'
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        name='password'
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit" sx={{mt:2}}>
                        Register
                        </Button>
                        
                </Box>
            </CardContent>
        </CardActionArea>
        </Card>

    )
}

export {Loginform, SignUpform};