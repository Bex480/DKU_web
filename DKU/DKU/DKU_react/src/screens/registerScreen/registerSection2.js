import './register.css'
import jwt_decode from "jwt-decode";
import React, { useState } from 'react';
import { icons } from 'react-icons';

export default function Polje2() {

    const [status, changeStatus] = useState(true)

    function InputField(props) {
        return (
            <div className='secondSectionInputContainer'>
                <input
                    id={props.id}
                    placeholder={props.placeholder}
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
        const rawRegisterData = JSON.stringify({
            first_name: event.target.elements.first.value,
            last_name: event.target.elements.second.value,
            username: event.target.elements.third.value,
            email: event.target.elements.fourth.value,
            password: event.target.elements.fifth.value,
        })

        const rawLoginData = JSON.stringify({
            username: event.target.elements.third.value,
            password: event.target.elements.fifth.value,
        })

        const fetchData = async () => {
            try{
                await fetch('https://dku-web.vercel.app/register/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: rawRegisterData
                })
                .then((response) => {
                    if(response.ok) {
                        console.log(response)
                        fetchUser()
                        return response.json()
                    }
                    else {
                        throw response
                    }
                })
                .then((responseData) => {
                    console.log(responseData)
                    changeStatus(true)
                })
                
        }catch (err) {
            console.error(err)
            changeStatus(false)
        }}

        const fetchUser = async () => {
            try{
                await fetch('https://dku-web.vercel.app/api/token/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: rawLoginData
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
                    var refreshToken = jwt_decode(responseData.refresh)
                    var accessToken = jwt_decode(responseData.refresh)
                    localStorage.setItem('id', JSON.stringify(refreshToken))
                    console.log(refreshToken.user_id)
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
                <div className='topFormContainer'>
                    <input 
                        id='first'
                        placeholder='First-Name'
                        autoComplete='off'></input>
                    <input 
                        id='second'
                        placeholder='Last-Name'
                        autoComplete='off'></input>
                </div>  
                <InputField
                    id='third'
                    placeholder='Username'
                    icon={1}
                    name='email' />
                <InputField
                    id='fourth'
                    placeholder='E-mail'
                    icon={1}
                    name='email' />
                <InputField
                    id='fifth'
                    placeholder='Password'
                    icon={2}
                    name='pass' />
                    {status ? <></> : <p 
                    className='secondSectionInputFail'>
                    *Login podaci netačni ili nepotpuni</p>}
                <button className='secondSectionRegisterButton'>Registruj se</button>
                <p className='secondSectionPitanje'>Imate račun? <a className='secondSectionNav'>Prijavite se</a></p>
            </form>
        </section>
    )
}