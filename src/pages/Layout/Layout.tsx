import Sidebar from "@/pages/Layout/components/Sidebar/Sidebar.tsx";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { password } from "@/constants/constants.ts";

const Layout = () => {
    const navigation = useNavigate();
    // @ts-ignore
    const passToken = JSON.parse(localStorage.getItem("PassToken"));
    useEffect(() => {
        passToken === password || navigation("/log-in");
    }, [passToken]);
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="min-h-screen w-full pl-64">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
