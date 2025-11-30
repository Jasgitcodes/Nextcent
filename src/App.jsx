import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './app/Home'  // Importing the home component
import Login from './app/auth/Login'
import Signup from './app/auth/Signup'
import Dashboard from './app/pages/Dashboard/dashboard'
import NotFound from './app/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './index.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
