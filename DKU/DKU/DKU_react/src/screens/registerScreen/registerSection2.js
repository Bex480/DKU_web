import './register.css'
//import jwt_decode from "jwt-decode";
import React, { useState } from 'react';

export default function Polje2() {

    const [status, changeStatus] = useState(true)

    function InputField(props) {
        return (
            <div className='secondSectionInputContainer'>
                <p className='secondSectionInputName'>{props.sectionName}</p>
                <input
                    id={props.id}
                    className={status ? 'secondSectionInputT': 'secondSectionInputF'}
                    name={props.name}
                    style={{ backgroundImage: `url(${LoadImages(props.icon)})` }}
                    type={isPass ? 'password' : 'text'}
                    autoComplete='off'
                    >
                </input>
            </div>
        )
    }

    function formSubmit(event) {
        event.preventDefault()
        const rawData = JSON.stringify({
            username: event.target.elements.first.value,
            password: event.target.elements.second.value
        })

            try{
                fetch('https://dku-web.vercel.app/api/token/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: rawData
                })
                .then((response) => {
                    if(response.ok) {
                        return response.json()
                    }
                    else {
                        throw response
                    }
                })
                .then((responseData) => {
                   // var refreshToken = jwt_decode(responseData.refresh)
                   // var accessToken = jwt_decode(responseData.refresh)
                    //localStorage.setItem('id',refreshToken.user_id)
                    //console.log(refreshToken.user_id)
                })
                
        }catch (err) {
            console.error(err)
            changeStatus(false)
        }

}

    let isPass = 0;

    function LoadImages(id) {
        switch (id) {
            case 1:
                isPass = 0;
                return require('./registerAssets/UserIcon.png');
            case 2:
                isPass = 1;
                return require('./registerAssets/LockIcon.png');
            default:
                isPass = 1;
                return require('./registerAssets/LockIcon.png');
        }
    }

    return (
        <section className='secondSection'>
            <h1 className='secondSectionHeader'>Registruj se</h1>
            <article className='secondSectionIntro'>Pridruži nam se i postani volonter već danas...</article>
            <form onSubmit={formSubmit} className='secondSectionForm'>
                <InputField
                    id='first'
                    sectionName='Email adresa'
                    icon={1}
                    name='email' />
                <InputField
                    id='second'
                    sectionName='Šifra'
                    icon={2}
                    name='pass' />
                    {status ? <></> : <p 
                    className='secondSectionInputFail'>
                    *Login podaci netačni ili nepotpuni</p>}
                <label className='secondSectionLabel'>
                    <input type='checkbox' className='secondSectionPassKeep' />
                    Spremi zaporuku
                </label>
                <button className='secondSectionRegisterButton'>Registruj se</button>
            </form>
            <button className='secondSectionGoogleButton'>Prijava pomoću Google računa</button>
            <p className='secondSectionPitanje'>Imate račun? <a className='secondSectionNav'>Prijavite se</a></p>
        </section>
    )
}