import { createBrowserRouter } from "react-router-dom";

import { IndexPage, LoginPage, RegisterPage } from "./pages";

export default createBrowserRouter([
    { path: "/", element: <IndexPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
]);
