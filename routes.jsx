import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importa HomePage, ajuste conforme necessário

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Define a rota para a página inicial */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;


