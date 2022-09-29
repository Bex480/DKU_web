import '../projectList.css'
import { useNavigate } from "react-router-dom";

export default function ProjectCard (props) {

    const navigate = useNavigate();

    return(
        <div className='projectContainer'>
            <img className='projectListPicture'
                src={require('../projectListAssets/TempPic.png')}
                alt='Does not exist'/>
            <p className='dateTime'>{props.begins.slice(0, 10)} {props.begins.slice(11, 19)}</p>
            <p className='projectName'>{props.title}</p>
            <p className='projectDesc'>{props.description}</p>
            <p onClick={() => {
                navigate('/projektDetalji', {state: {title: props.title}})
            }} className='vidiDetalje'>VIDI DETALJE-{'>'}</p>
        </div>
    )
}