// import React from "react"
import Home from "../component/home/home";
import About from "../component/about"
import Login from "../component/login/login";
import RegisterUser from "../component/register/register";
// import Logout from "../component/logout";
import ProtectedRoutes from "./protectedLoader";
import { redirect } from "react-router-dom";
import LocalStorage from "../utility/localStorage"


export class Routers {
   
 
    getRouters() {
        return [{
            path: "/",
            Component: Login,
        },
        {
            path: "login",
            Component: Login,
        },
        {
            path:"register",
            Component:RegisterUser
        },
        {
            path: "logout",
            //Component:Logout,
            loader() {
                const localStorage = new LocalStorage();
                localStorage.clearSession();
                return redirect("/login");
            },

        },
        {
            Component: ProtectedRoutes,
            children: [
                {
                    path: "home",
                    Component: Home,
                },
                {
                    path: "about",
                    Component: About,
                }

            ],
        }]
    }
}


export default Routers;