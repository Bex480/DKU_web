import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './screens/contactScreen/contact.js'
import Register from './screens/registerScreen/register.js'
import ProjectList from './screens/projectListScreen/projectList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} exact/>
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/registar" element={<Register />} />
      <Route path="/projekti" element={<ProjectList />} />
    </Routes>
  </BrowserRouter>
);
