import { useEffect } from 'react'
import './userScreen.css'

export default function UserScreen () {

    useEffect(() => {
        //getUsers()
    }, [])

   /* const getUsers = async () => {
        try{
            await fetch ('http://dku-web.vercel.app/profile/Bekir2/',
            {   method: 'GET',
                headers: { "Content-Type": "application/json" }
            }
            ).then((response) => {
                if(response.ok) {
                    return response.json()
                }
                else {
                    throw response
                }
            }).then((responseData) => {
                    return JSON.parse(responseData)
            })
        }catch (err){
            console.log(err)
        }
        
    } */

    return(
        <div className='mainContainerUser'>
            <section className='mainSectionUser'>
                <section className='upperSection'>
                    <div className='imageContainer'>
                        <img className='userImage'
                            src={require('./userAssets/User_Placeholder.png')}
                            alt='Not found'></img>
                        <input type='file' className='changeUserImage'></input>
                    </div>
                        <article className='nameInfo'>
                            <p>First Name: </p>
                            <p>Last Name:</p>
                            <p>Username:</p>
                            <p>E-mail:</p>
                            <p>Password:</p>
                        </article>
                </section>
                <section className='lowerSection'>
                    <p className='projectsOverhead'>Vaši projekti:</p>
                </section>
            </section>
        </div>
    )
}
