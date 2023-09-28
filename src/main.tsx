import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import{
  BrowserRouter, Routes, Route
} from 'react-router-dom'

import login from './routes/login.tsx'

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <login />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
