import { Link as NextLink } from "@nextui-org/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { topLinks } from "@/pages/Layout/constans/links.tsx";
import { FaGear } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const logoutHandler = () => {
        localStorage.removeItem("PassToken");
        navigate("log-in");
    };

    return (
        <div
            className={
                location.pathname === "/log-in"
                    ? "hidden"
                    : "flex flex-col w-64 py-8 fixed top-0 left-0 h-lvh"
            }
        >
            <div className="flex flex-col flex-1 gap-3 px-8">
                {topLinks.map((item, index) => (
                    <Link to={item.link} key={index}>
                        <NextLink
                            isBlock
                            color="primary"
                            className="w-48 h-10 flex gap-2"
                        >
                            {item.icon}
                            {item.name}
                        </NextLink>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col gap-3 px-8">
                <Link to="settings">
                    <NextLink
                        isBlock
                        color="primary"
                        className="w-48 h-10 flex gap-2"
                    >
                        <FaGear />
                        Settings
                    </NextLink>
                </Link>
                <NextLink
                    isBlock
                    color="danger"
                    className="w-48 h-10 flex gap-2 cursor-pointer"
                    onClick={logoutHandler}
                >
                    <CiLogout />
                    Log out
                </NextLink>
            </div>
        </div>
    );
};

export default Sidebar;
