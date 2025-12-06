import Car from "./Components/Car.jsx"
import Login from "./Component1/Login.jsx"
import Signup from "./Component1/Signup.jsx"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <Car/>
      <Login/>
      <Signup/>
    </div>
  )
}

export default App;

