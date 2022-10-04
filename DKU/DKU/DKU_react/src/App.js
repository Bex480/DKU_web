import './App.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [userId, changeId] = useState(localStorage.getItem('id'))

  const deleteId = () => {
    localStorage.removeItem('id', userId)
    changeId(null)
  }

  return (
    <div className='App'>
      <h1>Navigacija</h1>
      <section className='navigationButtons'>
        <Link className='navigationAnchor' to="/kontakt">
          <button className='navigationButton'>Kontakt</button>  
        </Link>
        <Link className='navigationAnchor' to="/registar">
          <button className='navigationButton'>Registar</button>  
        </Link>
        {
          userId === null ? 
          <Link className='navigationAnchor' to="/login" >
            <button className='navigationButton'>Login</button>
          </Link>
          :
          <button className='navigationButton' onClick={() => deleteId()}>Logout</button>
        }
        <Link className='navigationAnchor' to="/projekti">
          <button className='navigationButton'>Projekti</button>  
        </Link>
        <Link className='navigationAnchor' to="/korisnik">
          <button className='navigationButton'>Korisnik</button>  
        </Link>
      </section>
    </div>
  );
}

export default App;
