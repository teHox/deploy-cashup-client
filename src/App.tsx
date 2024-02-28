import { NextUIProvider } from "@nextui-org/react";
import "@/styles/main.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router.tsx";

function App() {
    return (
        <NextUIProvider>
            <RouterProvider router={router} />
        </NextUIProvider>
    );
}

export default App;
