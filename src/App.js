import './App.css';
import Kontakt from './screens/kontaktScreen/kontakt.js'
import Registar from './screens/registerScreen/registar.js'
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <h1>Navigacija</h1>
      <section className='navigationButtons'>
        <Link to="/kontakt">
          <button className='contactButton'>Kontakt</button>  
        </Link>
        <Link to="/registar">
          <button className='registerButton'>Registar</button>  
        </Link>
      </section>
    </div>
  );
}

export default App;
