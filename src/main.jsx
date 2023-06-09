import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/Login.jsx'
import { Inicio } from './pages/Home'
import ErrorPage from './pages/error';
import { Mantenimiento } from './pages/Mantenimiento';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement:<ErrorPage/>,
    
  },
  {
    path: "/Home",
    element: <Inicio/>,
  },
  {
    path: "/Mantenimiento",
    element: <Mantenimiento/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
