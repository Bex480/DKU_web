import './login.css'
import Section1 from './loginSection1.js'
import Section2 from './loginSection2.js'

export default function Login() {

    return(
        <div className='mainContainer'>
            <Section1 /> {/* Polje sa slikom i porukom */}
            <Section2 /> {/* Polje sa registracijskom formom */}
        </div>
    )
}
