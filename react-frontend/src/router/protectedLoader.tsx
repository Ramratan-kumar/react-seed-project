import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../header/navbar";

import LocalStorage from "../utility/localStorage"

const localStorage = new LocalStorage();
const ProtectedRoutes = () => {
	// TODO: Use authentication token
	const session = localStorage.getSession();
	const localStorageToken = session?.token|| "";

	return localStorageToken ? <><Navbar/><div><Outlet/></div></>: <Navigate to="/login"  replace />;
};

export default ProtectedRoutes;