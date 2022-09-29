import './projectDetails.css'
import {useLocation} from 'react-router-dom';

export default function ProjectDetails () {

    const location = useLocation();

    return(
        <div className='mainContainerD'>
            <section className='mainSectionD'>
                <section className='upperSectionD'>
                    <div className='imageContainerD'>
                        <img className='projectImageD'
                            src={require('./projectDetailsAssets/TempPic.png')}
                            alt='Not found'></img>
                        <input type='file' className='changeProjectImageD'></input>
                    </div>
                        <article className='nameInfoD'>
                            <p>Title: </p>
                            <p>Leader:</p>
                            <p>Supervisor:</p>
                            <p>Begins - Ends:</p>
                            <p>Current Status:</p>
                        </article>
                </section>
                <section className='lowerSectionD'>
                    <p className='descriptionOverheadD'>Description:</p>
                </section>
            </section>
        </div>
    )
}