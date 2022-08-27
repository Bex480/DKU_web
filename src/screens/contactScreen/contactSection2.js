import './contact'

export default function Section2 () {
   
    function Informacije (props) {
        return(
            <p className={props.class}>
                <img className={props.class2} alt='Failed to load' src={props.source}></img>
                {props.message}
            </p>
        )
    }
    
    function Slike (props) {
        return(
            <img src={props.source} alt='Failed to load'></img>
        )
    }

    return(
        <section className='sectionTwo'>
            <h1 className='sectionTwoHeader'>Informacije</h1> 
                <Informacije 
                    class='mailText' 
                    class2='mailIcon' 
                    message='@scilijas' 
                    source={require('./contactAssets/mailIcon.png')}/>
                <Informacije 
                    class='phoneText' 
                    class2='phoneIcon' 
                    message='033 400-813'  
                    source={require('./contactAssets/phoneIcon.png')}/>
                <Informacije 
                    class='locationText' 
                    class2='locationIcon' 
                    message='Kakanjska 16, Ilijaš 71380'  
                    source={require('./contactAssets/locationIcon.png')}/>
            <footer className='iconContainer'>
                <Slike source={require('./contactAssets/facebookIcon.png')} alt='Failed to load'/>
                <Slike source={require('./contactAssets/instagramIcon.png')} alt='Failed to load'/>
                <Slike source={require('./contactAssets/messengerIcon.png')} alt='Failed to load'/>
            </footer>
        </section>
    )
}