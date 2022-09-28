import './userScreen.css'

export default function UserScreen () {
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
                            <p>First Name:____________________</p>
                            <p>Last Name:____________________</p>
                            <p>Username:_____________________</p>
                        </article>
                </section>
            </section>
        </div>
    )
}
