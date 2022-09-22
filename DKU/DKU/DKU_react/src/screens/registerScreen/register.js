import './register.css'
import Section1 from './registerSection1.js'
import Section2 from './registerSection2.js'

export default function Register() {

    return(
        <div className='mainContainer'>
            <Section1 /> {/* Polje sa slikom i porukom */}
            <Section2 /> {/* Polje sa registracijskom formom */}
        </div>
    )
}
