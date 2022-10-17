import { useContext, useEffect } from "react"
import { AccountContext } from "../../../userContext/userContext"
import './passReset.css'
import "./passReset.css"

export default function PasswordReset () {

    function changePassF(event) {
        event.preventDefault();
        console.log('hi')
    }

    return(
        <div className="mainContainerAD">
            <form className="formContainerAD" onSubmit={changePassF}>
                <div className="centeringContainerAD">
                    <h1>Password Reset</h1>
                </div>
                <div>
                    <p className="inputTitleAD">Vaše ime</p>
                    <div className="centeringContainerAD">
                        <input className="titleInputAD" placeholder="John Smith..."></input>
                    </div>
                </div>
                <div className="dateContainerAD">
                    <div>
                        <p className="inputBeginsAD">Novi password</p>
                        <div className="centeringContainerAD2">
                            <input className="beginsInputAD" placeholder="Password123"></input>
                        </div>
                    </div>
                    <div>
                        <p className="inputEndsAD">Ponovi password</p>
                        <div className="centeringContainerAD2">
                            <input className="endsInputAD" placeholder="Password123"></input>
                        </div>
                    </div>
                </div>
                <div className="buttonContainerPC">
                    <button className="formButtonPC">Promijeni Password</button>
                </div>
            </form>
        </div>
    )
}