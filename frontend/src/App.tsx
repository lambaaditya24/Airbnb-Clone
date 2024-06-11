import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/layout'
import './index.css';
import Register from './pages/Register';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>Home Page</p></Layout>} />
        <Route path="/search" element={<Layout><p>Search Page</p></Layout>} />


        <Route path="/register" element={<Layout><Register /></Layout>} />


        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App