import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Components/Root.jsx";
import Home from "./Components/Home.jsx";
import Applied from "./Components/Applied.jsx";
import JobDetails from "./Components/JobDetails.jsx";
import AuthProvider from "./Components/AuthProvider.jsx";
import FeaturedJob from "./Components/FeaturedJob.jsx";
import LogIn from "./Components/LogIn.jsx";
import Register from "./Components/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/featured",
        element: <FeaturedJob />,
      },
      {
        path: "/applied",
        element: <Applied />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
