import { Button } from "@nextui-org/react";

const Settings = () => {
    return (
        <div className="w-full h-full bg-slate-100 p-8">
            <h1 className="text-center text-xl mb-10">Settings</h1>
            <form className="flex flex-wrap gap-y-4 justify-between">
                <input
                    type="email"
                    placeholder="email"
                    className="basis-5/12 py-3 px-4 border border-blue-500 rounded outline-0 focus:border-blue-700 focus:border-2"
                />
                <input
                    type="email"
                    placeholder="email"
                    className="basis-5/12 py-3 px-4 border border-blue-500 rounded outline-0 focus:border-blue-700 focus:border-2"
                />
                <input
                    type="email"
                    placeholder="email"
                    className="basis-5/12 py-3 px-4 border border-blue-500 rounded outline-0 focus:border-blue-700 focus:border-2"
                />
                <input
                    type="email"
                    placeholder="email"
                    className="basis-5/12 py-3 px-4 border border-blue-500 rounded outline-0 focus:border-blue-700 focus:border-2"
                />{" "}
                <input
                    type="email"
                    placeholder="email"
                    className="basis-5/12 py-3 px-4 border border-blue-500 rounded outline-0 focus:border-blue-700 focus:border-2"
                />{" "}
                <input
                    type="email"
                    placeholder="email"
                    className="basis-5/12 py-3 px-4 border border-blue-500 rounded outline-0 focus:border-blue-700 focus:border-2"
                />
                <Button color="primary" className="basis-full">
                    Save
                </Button>
            </form>
        </div>
    );
};

export default Settings;
