import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home";




/*const myelement = (
  <table>
    <tr>
      <th>
        Name
      </th>
    </tr>
    <tr>
    <td> MikaScar </td>
    </tr>
    <tr>
      <td>
       Scar
      </td>
    </tr>
  </table>
);*/

createRoot(document.getElementById('mika')).render(
  //myelement

  <StrictMode>
    <App/>
    <Home/>
  </StrictMode>
);