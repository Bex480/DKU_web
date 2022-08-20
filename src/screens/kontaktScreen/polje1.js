import './kontakt.css'

export default function Polje1 () {
    
    function formSubmit () {
        console.log("Submitano!!")
    }

    return(
    window.innerWidth > 1100 ?
        // Veliki ekran
        <section className='sectionOne'>
            <h1 className='sectionOneHeaderBigScreen'>Kontaktiraj nas</h1>
                <form onSubmit={formSubmit} className='sectionOneForm'>
                    <input className='sectionOneNameInputBigScreen' placeholder='Ime i prezime'></input>
                    <input className='sectionOneNameInputBigScreen' placeholder='Email adresa'></input>
                    <textarea className='sectionOneMessageInputBigScreen' placeholder='Poruka'></textarea>
                    <button className='sectionOneButton'>Pošalji</button>
                </form>
        </section> 
    
    :
     // Mali ekran
        <section className='sectionOne'>
            <h1 className='sectionOneHeaderSmallScreen'>Kontaktiraj nas</h1>
                <form onSubmit={formSubmit} className='sectionOneForm'>
                    <input className='sectionOneNameInputSmallScreen' placeholder='Ime i prezime'></input>
                    <input className='sectionOneNameInputSmallScreen' placeholder='Email adresa'></input>
                    <textarea className='sectionOneMessageInputSmallScreen' placeholder='Poruka'></textarea>
                    <button className='sectionOneButton'>Pošalji</button>
                </form>
        </section>
    )
}