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
            <div className="formContainerAD">
                <div className="centeringContainerAD">
                    <h1>Kreiranje Projekta</h1>
                </div>
                <div>
                    <p className="inputTitleAD">Ime projekta</p>
                    <div className="centeringContainerAD">
                        <input className="titleInputAD" placeholder="Čišćenje dvorišta..."></input>
                    </div>
                </div>
                <div className="dateContainerAD">
                    <div>
                        <p className="inputBeginsAD">Počinje</p>
                        <div className="centeringContainerAD2">
                            <input type='datetime-local' className="beginsInputAD" ></input>
                        </div>
                    </div>
                    <div>
                        <p className="inputEndsAD">Završava se</p>
                        <div className="centeringContainerAD2">
                            <input type='datetime-local' className="endsInputAD" ></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}