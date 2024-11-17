import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Analytics/>
      <App />
    </BrowserRouter>
,
)
