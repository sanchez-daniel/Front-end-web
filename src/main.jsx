import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-58hp1y1h7wqyec0j.us.auth0.com";
const client_id = "IRuzMtTIzQx9R7iHKd0l3336BYUqxhmI";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import { Inicio } from "./pages/Home";
import ErrorPage from "./pages/error";
import { Mantenimiento } from "./pages/Mantenimiento";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <Inicio />,
  },
  {
    path: "/Mantenimiento",
    element: <Mantenimiento />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider domain={domain}
      clientId={client_id}
      authorizationParams={{ redirect_uri: window.location.origin }}>
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);