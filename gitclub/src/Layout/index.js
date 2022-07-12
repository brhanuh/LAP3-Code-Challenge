import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
