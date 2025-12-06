import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Resume from './pages/Resume.jsx'



createRoot(document.getElementById('scarsan')).render(
  //myelement

  <StrictMode>
    <Resume />
  </StrictMode>
)
