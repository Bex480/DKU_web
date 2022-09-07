import '../projectList.css'

export default function MainSection () {
    return(
        <section className='mainSectionContainer'>
            <h1 className='mainSectionHeader'>
                Trenutno nema planiranih projekata</h1>
            <p className='mainSectionText'>
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ,</p>
            <img className='mainSectionImage'
                src={require('../projectListAssets/noProjects.png')}></img>
            <button className='mainSectionButton'>DODAJ PROJEKAT</button>
        </section>
    )
}