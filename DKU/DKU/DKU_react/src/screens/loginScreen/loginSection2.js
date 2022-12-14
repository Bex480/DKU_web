import './login.css'
import jwt_decode from "jwt-decode";
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AccountContext } from '../../userContext/userContext';

export default function Section2() {

    const [status, changeStatus] = useState(true)
    const navigate = useNavigate();
    const {userData, changeUserData} = useContext(AccountContext)

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
                    changeUserData({
                        ...userData,
                        access: jwt_decode(responseData.access)
                    })
                    localStorage.setItem('id', JSON.stringify(responseData.refresh))
                    navigate('/')
                })
                
        }catch (err) {
            console.error(err)
            changeStatus(false)
        }}
        fetchData()
}
    let host = window.location.hostname;
    function sendRequst(emailD) {
        console.log(`https://${host}/auth/users/reset_password/`)
        console.log(host)
        var emailData = JSON.stringify({
            email: emailD
        })

        const sendEmail = async () => {
            try{
                await fetch(`https://${host}/auth/users/reset_password/`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: emailData
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
                    alert('Success!')
                })
        }catch (err) {
            console.error(err)
        }}
        sendEmail()
    }

    let isPass = 0;

    async function LoadImages(id) {

        switch (id) {
            case 1:
                isPass = 0;
                return  require('./loginAssets/UserIcon.png');
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
            <article className='secondSectionIntroL'>Pridru??i nam se i postani volonter ve?? danas...</article>
            <form onSubmit={formSubmit} className='secondSectionFormL'>
                <InputField
                    id='first'
                    sectionName='Username'
                    icon={1}
                    name='email' />
                <InputField
                    id='second'
                    sectionName='??ifra'
                    icon={2}
                    name='pass' />
                    {status ? <></> : <p 
                    className='secondSectionInputFailL'>
                    *Login podaci neta??ni ili nepotpuni</p>}
                <label className='secondSectionLabelL'>
                    <input type='checkbox' className='secondSectionPassKeepL' />
                    Spremi zaporuku
                </label>
                <a className='passForgot' onClick={() => {
                    var confirmation = prompt('Unesite va?? Email za resetovanje passworda:', '')
                    if(confirmation === null) {
                        return
                    }
                    else{
                        sendRequst(confirmation);
                    }  
                }}>Zaboravili ste zaporku?</a>
                <div className='formButtonContainerL'>
                    <button className='secondSectionRegisterButtonL'>Loginuj se</button>
                    <button className='secondSectionGoogleButtonL'>Prijava pomo??u Google ra??una</button>
                </div>
            </form>
        </section>
    )
}