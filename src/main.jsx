import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './routes/home'
import ErrorPage from "./error-page.jsx";
import About from './routes/about.jsx';
import Contact from './routes/contact.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
