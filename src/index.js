import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Kontakt from './screens/kontaktScreen/kontakt.js'
import Registar from './screens/registerScreen/registar.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="kontakt" element={<Kontakt />} />
      <Route path="registar" element={<Registar />} />
    </Routes>
  </BrowserRouter>
);
