import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './Pages/Category';
import PDP from './Pages/PDP';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/pdp" element={<PDP />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;