
import React from "react"
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


import './App.css';
import Routers from "./router/router";


const App: React.FC = () => {
  const router = createBrowserRouter(new Routers().getRouters());
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </>)

}

export default App;