import { useContext, useEffect } from "react"
import { AccountContext } from "../../userContext/userContext"
import "./addProject.css"

export default function ProjectAdd () {

    const {userData, changeUserData} = useContext(AccountContext)

    function createProject (event) {
        console.log(userData.access)
        event.preventDefault()
    }

    return(
        <div className="mainContainerAD">
            <form  className="mainFormPD" onSubmit={createProject}>
                <input placeholder="title"/>
                <input placeholder="description"/>
                <input placeholder="max"/>
                <input placeholder="begins"/>
                <input placeholder="ends"/>
                <input placeholder="planned"/>
                <input placeholder="active"/>
                <input placeholder="archived"/>
                <input placeholder="leader_id" value={userData.access.user_id} readOnly={true}/>
                <input placeholder="supervisor_id"/>
                <button>Kreiraj Projekat</button>
            </form>
        </div>
    )
}