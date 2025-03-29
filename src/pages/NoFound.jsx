import React from "react";
import { useRouteError } from "react-router-dom";

function NoFound() {
  const err = useRouteError();
  return (
    <div>
      <p>sorry following error occured</p>
      <p>
        <i>{err.statusText || err.message}</i>
      </p>
    </div>
  );
}

export default NoFound;
