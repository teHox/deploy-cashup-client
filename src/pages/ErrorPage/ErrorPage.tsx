import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import img from "@/assets/img/page-not-found.png";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-slate-100 font-roboto text-white flex justify-center items-center flex-col gap-10">
            <img src={img} alt="page-not-found" className="w-80" />
            <Link to="/">
                <Button color="primary">Back</Button>
            </Link>
        </div>
    );
};

export default ErrorPage;
