import { FaDollarSign, FaHome, FaRegCreditCard, FaUsers } from "react-icons/fa";

export const topLinks = [
    {
        link: "/",
        name: "Dashboard",
        icon: <FaHome />,
    },
    {
        link: "/users",
        name: "Users",
        icon: <FaUsers />,
    },
    {
        link: "/transactions",
        name: "Transactions",
        icon: <FaDollarSign />,
    },
    {
        link: "/card-settings",
        name: "Card settings",
        icon: <FaRegCreditCard />,
    },
];
