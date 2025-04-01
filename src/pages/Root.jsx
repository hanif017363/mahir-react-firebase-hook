import React from "react";
import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Root</h1>
      <p className="text-2xl">This is the root page</p>
      <ul>
        <li>
          <Link className="text-red-600" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-red-600" to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="text-red-600" to={"/app"}>
            App
          </Link>
        </li>
        <li>
          <Link className="text-red-600" to={"/login"}>
            Login
          </Link>
        </li>
        <li>
          <Link className="text-red-600" to={"/posts"}>
            Posts
          </Link>
        </li>
        <li>
          <Link className="text-red-600" to={"/user"}>
            Users
          </Link>
        </li>
        <li>
          <Link className="text-red-600" to={"/shop"}>
            Shops
          </Link>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
