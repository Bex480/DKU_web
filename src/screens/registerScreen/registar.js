import './registar.css'
import Polje1 from './registarPolje1.js'
import Polje2 from './registarPolje2.js'

export default function Registar() {
    return(
        <div className='mainContainer'>
            <Polje1 /> {/* Polje sa slikom i porukom */}
            <Polje2 /> {/* Polje sa registracijskom formom */}
        </div>
    )
}
