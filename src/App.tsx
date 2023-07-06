import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./screens/SignIn";
import Example from "./screens/Example";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <SignIn />,
        },
        {
            path: "/easy",
            element: <Example />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
