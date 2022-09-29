import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/components/About">About</Link>
          </li>
          <li>
            <Link to="/components/Projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;