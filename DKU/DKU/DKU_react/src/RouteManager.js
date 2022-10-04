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
import ProjectDetails from "./screens/projectDetailsScreen/projectDetails";

export default function RouteManager () {
    const [userData, changeUserData] = useState({
        host: window.location.hostname,
        access: null
    })
    const id = localStorage.getItem('id')

    setInterval(() => {  
       /* const fetchData = async () => {
            try{
                await fetch('https://dku-web.vercel.app/api/token/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: localStorage.getItem('id')
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
                    changeUserData({
                        ...userData,
                        access: responseData.access
                    })
                })      
            }catch (err) {
                console.error(err)
            }}
            fetchData() */
    }, 720000); 

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
                <Route path="projektDetalji" element={<ProjectDetails />} />
            </Routes>
        </AccountContext.Provider>
  </BrowserRouter>
)
}