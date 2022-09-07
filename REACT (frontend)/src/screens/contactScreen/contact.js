import './contact.css'
import Section1 from './contactSection1';
import Section2 from './contactSection2';

function Contact() {

    return ( 
      <div className='mainContainer'>
        <Section1/> {/* Polje sa formom */}
        <Section2/> {/* Polje sa kontakt informacijama */}
      </div>
    )
  }
  
  export default Contact;