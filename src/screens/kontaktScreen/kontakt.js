import './kontakt.css'
import Polje1 from './polje1';
import Polje2 from './polje2';

function Kontakt() {

    return ( 
      <div className='mainContainer'>
        <Polje1/> {/* Polje sa formom */}
        <Polje2/> {/* Polje sa kontakt informacijama */}
      </div>
    )
  }
  
  export default Kontakt;