import './App.css';
import { Link, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <div className='App'>
      <h1>Navigacija{location.state==null ? '000' : '111'}</h1>
      <section className='navigationButtons'>
        <Link to="/kontakt">
          <button className='contactButton' onClick={() => alert(location.state)}>Kontakt</button>  
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
