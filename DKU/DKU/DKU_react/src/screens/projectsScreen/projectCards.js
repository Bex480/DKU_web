

export default function ProjectCard () {
    return(
        <div className='projectContainer'>
            <img className='projectListPicture'
                src={require('./projectsAssets/Projects_Placeholder.png')}/>
            <p className='dateTime'>{new Date().toString().slice(0, 25)}</p>
            <p className='projectName'>Izložba kućnih ljubimaca</p>
            <p className='projectDesc'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur 
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
        </div>
    )
}