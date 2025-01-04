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
import StudentDetails from "./pages/StudentDetails";
import ProfesseurDetails from "./pages/ProfesseurDetails";
import ClasseDetails from "./pages/ClasseDetails";
import Matieres from "./pages/Matieres";
import MatiereDetails from "./pages/MatiereDetails";


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
                handle: {
                    breadcrumb: "Classes",
                },
                children : [
                    {
                        index : true,
                        element : <Classes />,
                    },
                    {
                        path : "details/:id",
                        element : <ClasseDetails />,
                        handle: {
                            breadcrumb: ({ id } : { id : string}) => `Détails Classe ${id}`,
                        },
                    },
                ]
            },
            {
                path : "professors",
                handle: {
                    breadcrumb: "Professeurs",
                },
                children : [
                    {
                        index : true,
                        element : <Professors />,
                    },
                    {
                        path : "details/:id",
                        element : <ProfesseurDetails />,
                        handle: {
                            breadcrumb: ({ id } : { id : string}) => `Détails Professeur ${id}`,
                        },
                    },
                ]
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
                        element : <StudentDetails />,
                        handle: {
                            breadcrumb: ({ id } : { id : string}) => `Détails Etudiant ${id}`,
                        },
                    },
                ]
            },
            {
                path : "matieres",
                handle: {
                    breadcrumb: "Matières",
                },
                children : [
                    {
                        index : true,
                        element : <Matieres />,
                    },
                    {
                        path : "details/:id",
                        element : <MatiereDetails />,
                        handle: {
                            breadcrumb: ({ id } : { id : string}) => `Détails Matière ${id}`,
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