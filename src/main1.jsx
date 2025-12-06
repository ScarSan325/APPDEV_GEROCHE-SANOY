import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App1.jsx'

/*const myelement = (
  <table>
    <tr>
      <th>
        Name
      </th>
    </tr>
    <tr>
    <td> Mika </td>
    </tr>
    <tr>
      <td>
       Scar
      </td>
    </tr>
  </table>
);*/

createRoot(document.getElementById('mikamika')).render(
  //myelement

  <StrictMode>
    <App1/>
  </StrictMode>
)
