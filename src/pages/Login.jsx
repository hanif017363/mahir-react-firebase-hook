import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      Login
      <Link className="text-red-900" to={"/"}>
        Back to Home
      </Link>
    </div>
  );
}

export default Login;
