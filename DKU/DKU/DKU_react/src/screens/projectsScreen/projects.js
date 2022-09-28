import { useEffect, useState } from 'react'
import ProjectCard from './projectCards'
import './projects.css'

export default function ProjectsList () {

    const[pictureData, editData] = useState(null)

    useEffect(() => {
        
    },[])

  /*  function formSubmit(event) {
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
                    localStorage.setItem('id', JSON.stringify(responseData.refresh))
                    navigate('/')
                })
                
        }catch (err) {
            console.error(err)
            changeStatus(false)
        }}
        fetchData()
} */

    return(
        <div className='listContainer'>
            <ProjectCard />
            <ProjectCard /> 
            <ProjectCard /> 
            <ProjectCard /> 
            <ProjectCard /> 
        </div>
    )
}