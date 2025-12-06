import { createRoot } from "react-dom/client"
import App from "./App"
import { StrictMode } from "react"
import Car from "./component/Car.jsx"
import Login from "./component/Login"
import Signup from "./component/Signup"

createRoot(document.getElementById('Sanoy')).render(
  <StrictMode>
  <App/>

  </StrictMode>
)