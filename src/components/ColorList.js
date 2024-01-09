import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

/**
 * ColorsList Component:
 *
 * Renders NavBar and a list of colors, each represented as a link. Clicking on a link navigates user to a dedicated page for that color.
 *
 * Props:
 * colorsArr (array): Array of color objects
 *
 */

const ColorList = ({ colorsArr }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <NavBar />
      <p style={{ margin: "30px" }}>Please select a color:</p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {colorsArr.map((color) => (
          <Link key={color.name} to={`/colors/${color.name}`}>
            {color.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
