import React from "react";
import "./navbar.scss";
import { NavLink } from 'react-router-dom';
import LocalStorage from "../utility/localStorage";
import I_UserSessionState from "../interfaces/loginInterface";
// import {
//     selectUserSession,
//   } from '../features/userSession/userSessionSlice';
//   import { useAppSelector } from "../reducerConfig/hooks"



const Navbar: React.FC = () => {
    const localStorage = new LocalStorage();
    const user:I_UserSessionState = localStorage.getSession();
    return (
        <div>
            <header>
                <span>Welcome {user?.userName}</span>
            </header>
            <section>
                <nav className="navbar border-bottom border-body" data-bs-theme="blue">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    );

}


export default Navbar;