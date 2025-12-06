import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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

createRoot(document.getElementById('mika')).render(
  //myelement

  <StrictMode>
    <App/>
  </StrictMode>
)
