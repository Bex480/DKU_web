//import { useState } from 'react'
import './register.css'
//import {useNavigate} from "react-router-dom";

export default function Polje2 () {

    function InputField(props){
        return(
            <div className='secondSectionInputContainer'>
                <p className='secondSectionInputName'>{props.sectionName}</p>
                <input 
                    id={props.id}
                    className='secondSectionInput' 
                    style={{backgroundImage: `url(${LoadImages(props.icon)})`}}
                    type={isPass ? 'password' : ''}>
                </input>
            </div>
        )
    }

 //   const [userToken, editToken] = useState(111)

 /*   function getToken(token){
      editToken(token)
    } */

 //   const navigate = useNavigate();

   /* const passData = () => {
        navigate('/', {state:{id: userToken, name:'sabaoon'}})
    } */

    function formSubmit (event) {
        event.preventDefault()
        const rawData = {
            email: event.target.elements.first.value,
            password: event.target.elements.second.value
        }
        
        console.log(rawData.email)

        fetch('http://127.0.0.1:8000/api/token/',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: rawData
        }).then(() => {
            fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => console.log(data))
        })

      /*  fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data)) */
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
                        id='first'
                        sectionName='Email adresa'
                        icon={1}
                        name='email'/>
                    <InputField 
                        id='second'
                        sectionName='Šifra'
                        icon={2}
                        name='pass'/>
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