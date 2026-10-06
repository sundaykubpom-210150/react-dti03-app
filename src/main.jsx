import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' แนะนำให้ลบออก หรือ comment ออก เพราะเราจะออกแบบเอง
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
