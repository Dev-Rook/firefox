import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

// Route Import:
import Index from './routes/Index'
import Setting from './routes/Setting'

// Dynamic Routes Import:

// Component Import: 

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="" element={<Index />} />
    </Routes>
   </Router>
  )
}

export default App
