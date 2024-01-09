import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RouteList from "./components/RouteList";

/**
 * App Component:
 *
 * Top-level component for the Color Factory App,manages the main state and behavior of the application, renders the RouteList component, which handles the routing and display of different pages.
 *
 * State:
 *  - colorsArr (array of objects): Holds the current list of colors.
 *  - formData (object): Stores the current state of the form used to add new colors.
 *
 * Functions:
 *  - handleSubmit (function): Handles form submission, adds new color to the colors list and navigates to main "/colors" page where colors are listed.
 *  - handleChange (function): Updates the formData state as the user types in the form inputs.
 */

let initialColors = [
  { name: "red", hex: "#ff0000" },
  { name: "green", hex: "#008000" },
  { name: "blue", hex: "#0000ff" },
];
let initialFormData = { name: "", hex: "#000000" };

function App() {
  const [colorsArr, setColors] = useState(initialColors);
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColor = { name: formData.name.toLowerCase(), hex: formData.hex };
    if (!colorsArr.find((color) => color.name === newColor.name)) {
      setColors((currentColors) => [newColor, ...currentColors]);
      navigate("/colors");
    } else {
      alert("Color name already exists, choose another color");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div style={{ width: "100dvw", height: "100dvh", margin: "auto" }}>
      <RouteList
        colorsArr={colorsArr}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
    </div>
  );
}

export default App;
