import '../projectList.css'
import { useNavigate } from "react-router-dom";

export default function ProjectCard (props) {

    const navigate = useNavigate();
    var date1 = props.begins.slice(0, 10)+' '+props.begins.slice(11, 19)
    return(
        <div className='projectContainer'>
            <img className='projectListPicture'
                src={require('../projectListAssets/TempPic.png')}
                alt='Does not exist'/>
            <p className='dateTime'>{date1}</p>
            <p className='projectName'>{props.title}</p>
            <textarea className='projectDesc' readOnly={true} value={props.description} />
            <p onClick={() => {
                navigate('/projektDetalji', {state: {
                    title: props.title,
                    date: date1,
                    max_volunteers: props.max_volunteers,
                    description: props.description,
                }})
            }} className='vidiDetalje'>VIDI DETALJE-{'>'}</p>
        </div>
    )
}