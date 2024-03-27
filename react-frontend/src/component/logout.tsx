import React from "react";
import { Navigate } from "react-router-dom";
import LocalStorage from "../utility/localStorage"



const Logout: React.FC = () => {
    const localStorage = new LocalStorage()
    localStorage.clearSession()
    return <Navigate to="/login" replace={true} />

}

export default Logout;