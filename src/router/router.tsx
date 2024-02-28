import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout/Layout.tsx";
import Dashboard from "@/pages/Dashboard/Dashboard.tsx";
import ErrorPage from "@/pages/ErrorPage/ErrorPage.tsx";
import Users from "@/pages/Users/Users.tsx";
import User from "@/pages/User/User.tsx";
import Transactions from "@/pages/Transactions/Transactions.tsx";
import LogIn from "@/pages/LogIn/LogIn.tsx";
import Settings from "@/pages/Settings/Settings.tsx";
import CardSettings from "@/pages/CardSettings/CardSettings.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "users",
                element: <Users />,
            },
            {
                path: "auth/:id",
                element: <User />,
            },
            {
                path: "transactions",
                element: <Transactions />,
            },
            {
                path: "log-in",
                element: <LogIn />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
            {
                path: "card-settings",
                element: <CardSettings />,
            },
        ],
    },
]);
