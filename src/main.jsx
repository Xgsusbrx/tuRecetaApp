import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {TuRecetaApp} from './TuRecetaApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TuRecetaApp/>
  </StrictMode>,
)
