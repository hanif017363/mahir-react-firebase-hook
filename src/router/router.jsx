import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import App from "../App";
import NoFound from "../pages/NoFound";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/App", element: <App /> },
  { path: "*", element: <NoFound /> },
]);
