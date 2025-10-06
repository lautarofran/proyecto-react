import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import PaginaCategoria from "./PaginaCategoria";

export default function App() {
  return (
    <Router>
      <Header />

      <div className="rutas">
        <Routes>
          <Route path="/" element={<Navigate to="/congelados" />} />
          <Route path="/congelados" element={<PaginaCategoria categoria="congelados" />} />
          <Route path="/secos" element={<PaginaCategoria categoria="secos" />} />
        </Routes>
      </div>

      <Footer />
    </Router>

  );
}
