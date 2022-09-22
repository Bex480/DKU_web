import './App.css';
import { Link } from "react-router-dom";
//import { useState } from 'react';

function App() {

  //const [userData, changeUserData] = useState(null)

  return (
    <div className='App'>
      <h1>Navigacija</h1>
      <section className='navigationButtons'>
        <Link to="/kontakt">
          <button className='navigationButton'>Kontakt</button>  
        </Link>
        <Link to="/registar">
          <button className='navigationButton'>Registar</button>  
        </Link>
        <Link to="/login">
          <button className='navigationButton'>Login (temporary)</button>  
        </Link>
        <Link to="/projekti">
          <button className='navigationButton'>Projekti</button>  
        </Link>
      </section>
    </div>
  );
}

export default App;
