import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { password } from "@/constants/constants.ts";
import { useForm } from "react-hook-form";

type InputType = {
    passwordInput: string;
};

const LogIn = () => {
    const [pass, setPass] = useState("");
    const {
        register,
        formState: { errors },
        setError,
    } = useForm<InputType>();
    const navigate = useNavigate();
    // @ts-ignore
    const passToken = JSON.parse(localStorage.getItem("PassToken"));
    const loginHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (passToken === password) {
            navigate("/");
        } else if (pass === password) {
            localStorage.setItem("PassToken", JSON.stringify(pass));
            navigate("/");
        } else {
            setError("passwordInput", {
                type: "manual",
                message: "Please enter correct password",
            });
        }
    };
    return (
        <form
            className="flex flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            onSubmit={loginHandler}
        >
            <input
                type="password"
                defaultValue="44444444"
                className="w-80 p-4 rounded-md bg-slate-100 focus:outline-blue-500"
                value={pass}
                {...register("passwordInput", { required: true })}
                onChange={(e) => setPass(e.target.value)}
            />
            {errors.passwordInput && (
                <span className="text-red-500">
                    {errors.passwordInput.message}
                </span>
            )}
            <button className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600">
                Log In
            </button>
        </form>
    );
};

export default LogIn;
