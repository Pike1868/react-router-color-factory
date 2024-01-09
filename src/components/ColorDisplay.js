import React from "react";
import { Link, useParams } from "react-router-dom";

/**
 * ColorDisplay Component:
 *
 * Displays an individual color. The color's hex value is set as the background color of the page, and color's name is shown in a message to the user.
 * Includes a link to return to the main list of colors.
 *
 * Props:
 * colorsArr (array): Array of color objects
 *
 */

const ColorDisplay = ({ colorsArr }) => {
  const { color } = useParams();
  const colorObj = colorsArr.find((c) => c.name === color);

  return (
    <div
      style={{
        backgroundColor: colorObj ? colorObj.hex : "transparent",
        textAlign: "center",
        width: "100vw",
        height: "100vh",
        padding: "20px",
      }}
    >
      <p
        style={{
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "600",
          margin: "0 0 50px",
          padding: "50px 0",
        }}
      >
        This is {colorObj.name}.
      </p>
      <div>
        <Link
          to="/colors"
          style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "500" }}
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ColorDisplay;
