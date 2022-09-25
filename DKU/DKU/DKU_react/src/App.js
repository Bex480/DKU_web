import './App.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const [userId, changeId] = useState(localStorage.getItem('id'))

  const deleteId = () => {
    console.log(userId)
    localStorage.removeItem('id', userId)
    changeId(null)
  }

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
        {
          userId === null ? 
          <Link to="/login" >
            <button className='navigationButton'>Login</button>
          </Link>
          :
          <button className='navigationButton' onClick={() => deleteId()}>Logout</button>
        }
        <Link to="/projekti">
          <button className='navigationButton'>Projekti</button>  
        </Link>
      </section>
    </div>
  );
}

export default App;
