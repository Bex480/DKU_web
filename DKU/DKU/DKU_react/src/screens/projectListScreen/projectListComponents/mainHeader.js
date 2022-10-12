import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountContext } from '../../../userContext/userContext'
import '../projectList.css'

export default function MainHeader () {

    const {userData, changeUserData} = useContext(AccountContext)
    const navigate = useNavigate();

    function NavigationOption (props) {
        return(
            <a className='navigationOption' onClick={() => {
                navigate('/')
            }}>
                {props.title}
            </a>
        )
    }

    return(
            <header className='heading'>
            <img className='headerImage' src={require('../projectListAssets/logo.png')} alt='Failed to load'></img>
            <nav className='navContainer'>
                <NavigationOption title='Početna'/>
                <NavigationOption title='O nama'/>
                <NavigationOption title='Planirani projekti'/>
                <NavigationOption title='Kontaktiraj nas'/>
            </nav>
            <div className='accountOptions'>
                <button className='logIn'>Prijavi se</button>
                <button className='register'>Registruj se</button>
            </div>
            </header>
    )
}