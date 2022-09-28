import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Contact from "./screens/contactScreen/contact";
import Login from "./screens/loginScreen/login";
import ProjectList from "./screens/projectListScreen/projectList";
import Register from "./screens/registerScreen/register";
import { AccountContext } from "./userContext/userContext";
import UserScreen from "./screens/userScreen/userScreen";
import ProjectsList from "./screens/projectsScreen/projects";


export default function RouteManager () {

    const [userData, changeUserData] = useState({
        host: window.location.hostname
    })

    return(
    <BrowserRouter>
        <AccountContext.Provider value={{userData, changeUserData}}>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="kontakt" element={<Contact/>} />
                <Route path="registar" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="projekti" element={<ProjectList />} />
                <Route path="korisnik" element={<UserScreen />} />
                <Route path="projektiLista" element={<ProjectsList />} />
            </Routes>
        </AccountContext.Provider>
  </BrowserRouter>
)
}