import './App.css';
import Contact from './screens/contactScreen/contact'
import Registar from './screens/registerScreen/register.js'
import ProjectList from './screens/projectListScreen/projectList.js';
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
        <Link to="/projekti">
          <button className='projectsButton'>Projekti</button>  
        </Link>
      </section>
    </div>
  );
}

export default App;
