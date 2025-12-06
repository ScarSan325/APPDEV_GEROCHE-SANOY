import { createRoot } from "react-dom/client"
import App from "./App"
import { StrictMode } from "react"
import Car from "./Components/Car.jsx"
import Login from "./Component1/Login"
import Signup from "./Component1/Signup"

createRoot(document.getElementById('Sanoy')).render(
  <StrictMode>
  <App/>

  </StrictMode>
)