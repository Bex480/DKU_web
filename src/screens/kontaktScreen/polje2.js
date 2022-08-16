import './kontakt.css'

export default function Polje2 () {
   
    return(
    window.innerWidth > 1100 ?
    // Veliki ekran
        <section className='sectionTwo'>
            <h1 className='sectionTwoHeaderBigScreen'>Informacije</h1> 
                <p className='mailTextBigScreen'>
                    <img className='mailIconBigScreen' alt='Failed to load' src={require('./kontaktAssets/mailIcon.png')}></img>
                    @scilijas
                </p>
                <p className='phoneTextBigScreen'>
                    <img className='phoneIconBigScreen' alt='Failed to load' src={require('./kontaktAssets/phoneIcon.png')}></img>
                    033 400-813
                </p>   
                <p className='locationTextBigScreen'>
                    <img className='locationIconBigScreen' alt='Failed to load' src={require('./kontaktAssets/locationIcon.png')}></img>
                    Kakanjska 16, Ilijaš 71380
            </p>
            <footer className='iconContainerBigScreen'>
                <img src={require('./kontaktAssets/facebookIcon.png')} alt='Failed to load'></img>
                <img src={require('./kontaktAssets/instagramIcon.png')} alt='Failed to load'></img>
                <img src={require('./kontaktAssets/messengerIcon.png')} alt='Failed to load'></img>
            </footer>
        </section>

        :
        // Mali ekran
        <section className='sectionTwo'>
            <h1 className='sectionTwoHeaderSmallScreen'>Informacije</h1> 
                <p className='mailTextSmallScreen'>
                    <img className='mailIconSmallScreen' alt='Failed to load' src={require('./kontaktAssets/mailIcon.png')}></img>
                    @scilijas
                </p>
                <p className='phoneTextSmallScreen'>
                    <img className='phoneIconSmallScreen' alt='Failed to load' src={require('./kontaktAssets/phoneIcon.png')}></img>
                    033 400-813
                </p>   
                <p className='locationTextSmallScreen'>
                    <img className='locationIconSmallScreen' alt='Failed to load' src={require('./kontaktAssets/locationIcon.png')}></img>
                    Kakanjska 16, Ilijaš 71380
            </p>
            <footer className='iconContainerSmallScreen'>
                <img src={require('./kontaktAssets/facebookIcon.png')} alt='Failed to load'></img>
                <img src={require('./kontaktAssets/instagramIcon.png')} alt='Failed to load'></img>
                <img src={require('./kontaktAssets/messengerIcon.png')} alt='Failed to load'></img>
            </footer>
        </section>
    )
}