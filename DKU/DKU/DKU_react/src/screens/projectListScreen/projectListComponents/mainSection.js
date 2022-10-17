import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../projectList.css'
import ProjectCard from './projectCards'

export default function MainSection () {

    const [projectData, changeProjectData] = useState([null])

    useEffect(() => {
        getProjects();
    }, [])

    const getProjects = async () => {
        try{
            await fetch ('https://dku-web.vercel.app/projects/list/planned/',
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
                if(projectData === JSON.parse(responseData))
                    return
                else 
                    return changeProjectData(JSON.parse(responseData))
            })
        }catch (err){
            console.log(err)
        }
        
    }

   

    const projects = projectData[0] == null ? 'Failed to load projects' :projectData.map((project) => {
        return <ProjectCard 
            key = {project.pk}
            title = {project.fields.title}
            description = {project.fields.description}
            begins = {project.fields.begins} 
            max_volunteers = {project.fields.max}
        />
    }) 
    
    return(
        <section className='mainSectionContainer'>
            {projectData[0] == null ?
            <>
                <h1 className='mainSectionHeader'>
                Trenutno nema planiranih projekata</h1>
                <p className='mainSectionText'>
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ,</p>
                <img className='mainSectionImage'
                src={require('../projectListAssets/noProjects.png')}
                alt='Does not exist'></img>
                <Link to="/dodajProjekat">
                    <button className='mainSectionButton'>DODAJ PROJEKAT</button>
                </Link>
            </>
            :
            <>
            <Link to="/dodajProjekat">
                <button className='mainSectionButton2'>DODAJ PROJEKAT</button>
            </Link>
            <div className='listContainer'>
                {projects}
                </div>
            </>
            }
        </section>
    )
}