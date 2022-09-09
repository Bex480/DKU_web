import './register.css'

export default function Polje2 () {

    function InputField(props){
        return(
            <div className='secondSectionInputContainer'>
                <p className='secondSectionInputName'>{props.sectionName}</p>
                <input 
                    className='secondSectionInput' 
                    style={{backgroundImage: `url(${LoadImages(props.icon)})`}}
                    type={isPass ? 'password' : ''}>
                </input>
            </div>
        )
    }

    function formSubmit () {
        console.log("Submitano!!")
    }
    
    let isPass = 0;

    function LoadImages (id) {
        switch(id) {
            case 1: 
                isPass=0;
                return require('./registerAssets/UserIcon.png');
            case 2: 
                isPass=1;
                return require('./registerAssets/LockIcon.png');
            default:
                isPass=1;
                return  require('./registerAssets/LockIcon.png');
        }
    }

    return(
        <section className='secondSection'>
                <h1 className='secondSectionHeader'>Registruj se</h1>
                <article className='secondSectionIntro'>Pridruži nam se i postani volonter već danas...</article>
                <form onSubmit={formSubmit} className='secondSectionForm'>
                    <InputField 
                    sectionName='Email adresa'
                    icon={1}/>
                    <InputField sectionName='Šifra'
                    icon={2}/>
                    <label className='secondSectionLabel'>
                    <input type='checkbox' className='secondSectionPassKeep'/>
                    Spremi zaporuku
                    </label>
                    <button className='secondSectionRegisterButton'>Registruj se</button> 
                </form>
                <button className='secondSectionGoogleButton'>Prijava pomoću Google računa</button> 
                <p className='secondSectionPitanje'>Imate račun? <a className='secondSectionNav'>Prijavite se</a></p>
        </section>
    )
}