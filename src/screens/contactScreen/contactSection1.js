import './contact.css'

export default function Section1 () {
    
    function formSubmit () {
        console.log("Submitano!!")
    }

    function Inputs(props) {
        return(
            <input className='sectionOneNameInput' placeholder={props.placeholder}></input>
        )
    }

    return(
        <section className='sectionOne'>
            <h1 className='sectionOneHeader'>Kontaktiraj nas</h1>
                <form onSubmit={formSubmit} className='sectionOneForm'>
                    <Inputs placeholder='Ime i prezime'/>
                    <Inputs placeholder='Email adresa'/>
                    <textarea className='sectionOneMessageInput' placeholder='Poruka'></textarea>
                    <button className='sectionOneButton'>Pošalji</button>
                </form>
        </section> 
    )
}