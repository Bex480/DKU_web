import { useContext } from 'react'
import { AccountContext } from '../../../userContext/userContext'
import '../projectList.css'

export default function MainHeader () {

    const {userData, changeUserData} = useContext(AccountContext)

    function NavigationOption (props) {
        return(
            <a className='navigationOption' href='a'>
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