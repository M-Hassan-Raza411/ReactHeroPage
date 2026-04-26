import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ContactSection from './components/ContactSection.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import Home from './Home.jsx';
import TechnicalSection from './components/TechnicalSection.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/skills",
    element:<>
        <Nav />
        <TechnicalSection/>
        <Footer />
    </> ,
  },
  {
    path: "/contact",
    element: <>
        <Nav />
        <ContactSection />
        <Footer />
    </>,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
    
  
);