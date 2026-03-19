import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Level1 from './Level1.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Level1 />
  </StrictMode>,
)
