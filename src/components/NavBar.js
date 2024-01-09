import React from "react";
import { Link } from "react-router-dom";

/**
 * AddColorForm Component:
 *
 * Provides navigation for app, displays welcome message and a link to the form for adding a new color.
 *
 */

const NavBar = () => {
  return (
    <nav
      style={{
        padding: "50px",
        backgroundColor: "darkgray",
        textAlign: "center",
      }}
    >
      <h3>Welcome to Color Factory</h3>
      <Link to="/colors/new" style={{ fontSize: "1.5rem" }}>
        Add a color
      </Link>
    </nav>
  );
};

export default NavBar;
