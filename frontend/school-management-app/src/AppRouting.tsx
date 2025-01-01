import { createBrowserRouter, Navigate } from "react-router-dom";
import Users from "./pages/Users";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Professors from "./pages/Professors";
import Students from "./pages/Students";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ManagePassword from "./pages/ManagePassword";
import Details from "./pages/Details";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <Navigate to={"/login"} />,
    },
    {
        path : "login",
        element : <Login />,
    },
    {
        path : "",
        element : <MainLayout />,
        children : [
            {
                path : "dashboard",
                element : <Dashboard />,
                handle: {
                    breadcrumb: "Tableau de bord",
                },
            },
            {
                path : "classes",
                element : <Classes />,
                handle: {
                    breadcrumb: "Liste de classes",
                },
            },
            {
                path : "professors",
                element : <Professors />,
                handle: {
                    breadcrumb: "Professeurs",
                },
            },
            {
                path : "students",
                handle: {
                    breadcrumb: "Etudiants",
                },
                children : [
                    {
                        index : true,
                        element : <Students />,
                    },
                    {
                        path : "details/:id",
                        element : <Details />,
                        handle: {
                            breadcrumb: ({ id } : { id : string}) => `Détails Etudiant ${id}`,
                        },
                    },
                ]
            },
            {
                path : "users",
                element : <Users />,
            },
            {
                path : "settings",
                children : [
                    {
                        path : "profile",
                        element : <Profile />,
                    },
                    {
                        path : "manage-password",
                        element : <ManagePassword />,
                    },
                ]
            },
            {
                path : "*",
                element : <NotFound />
            },
        ]
    },
    {
        path : "*",
        element : <NotFound />
    },
])