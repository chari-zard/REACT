import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from './components/card.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card title = "Preview1" />
    <Card  title = "Preview2"/>
    <Card  title = "Preview3"/>
  </StrictMode>,
)
