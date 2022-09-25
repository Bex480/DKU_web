import './login.css'
import jwt_decode from "jwt-decode";
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AccountContext } from '../../userContext/userContext';

export default function Section2() {

    const [status, changeStatus] = useState(true)
    const navigate = useNavigate();
    const userInfo = useContext(AccountContext)

    useEffect(() => {
        if(localStorage.getItem('id') === null)
            return
        else{
            navigate('/')
        }
    })

    function InputField(props) {
        return (
            <div className='secondSectionInputContainer'>
                <p className='secondSectionInputNameL'>{props.sectionName}</p>
                <input
                    id={props.id}
                    className={status ? 'secondSectionInputTL': 'secondSectionInputFl'}
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
        const hostName = window.location.hostname; 

        const fetchData = async () => {
            try{
                await fetch('https://dku-web.vercel.app/api/token/', {
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
                    //var refreshToken = jwt_decode(responseData.refresh)
                    //var accessToken = jwt_decode(responseData.refresh)
                    localStorage.setItem('id', JSON.stringify(responseData.refresh))
                    navigate('/')
                })
                
        }catch (err) {
            console.error(err)
            changeStatus(false)
        }}
        fetchData()
}

    let isPass = 0;

    function LoadImages(id) {
        switch (id) {
            case 1:
                isPass = 0;
                return require('./loginAssets/UserIcon.png');
            case 2:
                isPass = 1;
                return require('./loginAssets/LockIcon.png');
            default:
                isPass = 1;
                return require('./loginAssets/LockIcon.png');
        }
    }

    return (
        <section className='secondSectionL'>
            <h1 className='secondSectionHeaderL'>Loginuj se</h1>
            <article className='secondSectionIntroL'>Pridruži nam se i postani volonter već danas...</article>
            <form onSubmit={formSubmit} className='secondSectionFormL'>
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
                    className='secondSectionInputFailL'>
                    *Login podaci netačni ili nepotpuni</p>}
                <label className='secondSectionLabelL'>
                    <input type='checkbox' className='secondSectionPassKeepL' />
                    Spremi zaporuku
                </label>
                <div className='formButtonContainerL'>
                    <button className='secondSectionRegisterButtonL'>Loginuj se</button>
                    <button className='secondSectionGoogleButtonL'>Prijava pomoću Google računa</button>
                </div>
            </form>
        </section>
    )
}