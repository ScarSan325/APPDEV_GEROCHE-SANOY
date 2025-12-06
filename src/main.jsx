import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./pages/Home";
createRoot(document.getElementById('mika')).render(
  //myelement

  <StrictMode>
    <Home/>
  </StrictMode>
);

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

