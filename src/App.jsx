import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from "./component/Car.jsx"
import FormContainer from "./component/FormContainer.jsx"
import AnimalComponent from "./component/Animal.jsx"
import { Login } from '@mui/icons-material'
import Box from "@mui/material/Box";
import {Loginform, SignUpform} from './component/login.jsx'

function App() {
  return(

    
    <div>
      <Car/>
     <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 4,
      }}
    >
        <Loginform />
        <SignUpform />
    </Box>
    </div>
  
  )
}

export default App
