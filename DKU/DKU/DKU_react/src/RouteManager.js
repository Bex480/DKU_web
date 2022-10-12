import { useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import Contact from "./screens/contactScreen/contact";
import Login from "./screens/loginScreen/login";
import ProjectList from "./screens/projectListScreen/projectList";
import Register from "./screens/registerScreen/register";
import { AccountContext } from "./userContext/userContext";
import UserScreen from "./screens/userScreen/userScreen";
import ProjectDetails from "./screens/projectDetailsScreen/projectDetails";
import ProjectAdd from "./screens/addProjectScreen/addProject";

export default function RouteManager () {
    const [userData, changeUserData] = useState({
        host: window.location.hostname,
        access: null,
        timer: null
    })

    useEffect(() =>{
        console.log('hello')
        setInterval(tryIn,5000)
    }, [])
    var m=1;
    function tryIn () {
        sessionStorage.setItem('timer', '1')
        fetchData()
        console.log(m++)
    }

   ///PROBABLY NEED TO DECODE THIS ACCESS TOKEN LATER
    const fetchData = async () => {
        const tokenData = JSON.stringify({
            refresh: localStorage.getItem('id') === null ? "" :localStorage.getItem('id').slice(1, -1)
        })
        try{
            await fetch('https://dku-web.vercel.app/api/token/refresh/', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: tokenData
            })
            .then((response) => {
                console.log(tokenData)
                if(response.ok) {
                    return response.json()
                }
                else {
                    throw response
                }
            })
            .then((responseData) => {
                //console.log(responseData)
                console.log(responseData.refresh)
                localStorage.setItem('id', JSON.stringify(responseData.refresh))
                changeUserData({
                    ...userData,
                    access: responseData.access
                })
            })      
        }catch (err) {
            console.error(err)
        }}

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
                <Route path="dodajProjekat" element={<ProjectAdd />} />
            </Routes>
        </AccountContext.Provider>
  </BrowserRouter>
)
}