import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import App from "../App";
import NoFound from "../pages/NoFound";

import PostList from "../pages/PostList";
import Root from "../pages/Root";
import UserList from "../pages/UserList";
import PostDetails from "../pages/PostDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NoFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/app", element: <App /> },
      { path: "/login", element: <Login /> },
      { path: "/posts", element: <PostList /> },
      { path: "/user", element: <UserList /> },

      {
        path: "/posts/:postId",
        element: <PostDetails />,
      },
    ],
  },
]);
