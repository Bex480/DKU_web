import './projectDetails.css'
import {useLocation} from 'react-router-dom';

export default function ProjectDetails () {

    const location = useLocation();

    const TextDescription = function (props) {
        return(
            <div className='dateContainerPD'>
                    <p className='datePD'>{props.name}</p>
                    <p >{props.text}</p>
            </div>
        )
    }

    return(
        <div className='mainContainerPD'>
            <section className='containerPD'>
                <h1 className='headerPD'>{location.state.title}</h1>
                <TextDescription
                    name = 'Period trajanja projekta:'
                    text = {location.state.date}
                />
                <TextDescription
                    name = 'Vrijeme pripreme i realizacija projekta:'
                    text = 'PLACEHOLDER'
                />
                <TextDescription
                    name = 'Broj učenika:'
                    text = {location.state.max_volunteers}
                />
                <article className='buttonContainerPD'>
                Oblik društveno-korisnog učenja:
                    <div className='buttonContainerPD2'>
                        <button style={{color: 'black', fontWeight: 'bold'}}>Direktno</button>
                        <button style={{color: 'grey', fontWeight: 'bold'}}>Indirektno</button>
                        <button style={{color: 'lightblue', fontWeight: 'bold'}}>Istraživanje</button>
                        <button style={{color: 'gold', fontWeight: 'bold'}}>Zagovaranje</button>
                    </div>
                </article>
                <div className='projectGoalPD'>
                    <p className='datePD'>Cilj projekta:</p>
                    <div className='projectGoalTextArea'>
                        {location.state.description}
                    </div>
                </div>
                <div className='finalContainerPD'>
                    <p className='datePD'>Projekat se realizuje na:</p>
                    <p >Nivou škole</p>
                </div>
                <button className='finalButtonPD'>Pridruži se </button>
            </section>
        </div>
    )
}