import React from "react";

/**
 * AddColorForm Component:
 *
 * Displays form that allows users to create a new color, by providing a name and selecting a hex color, adds those values to the colors list on submission
 *
 * Props:
 *  - formData (object): An object containing color details. Expected format: {name: "colorName", hex: "#hexValue"}.
 *  - handleChange (function): Event handler function for input changes, updates UI.
 *  - handleSubmit (function): Event handler function for form submission, adds the new color to the colors list.
 *
 */

const AddColorForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Choose a color name</label>
        <input
          required
          id="name"
          name="name"
          type="text"
          placeholder="Color Name"
          value={formData ? formData.name : ""}
          onChange={handleChange}
          style={{ margin: "20px" }}
        />
        <label htmlFor="hex">Choose a color hex</label>
        <input
          required
          id="hex"
          name="hex"
          type="color"
          value={formData ? formData.hex : "#000000"}
          onChange={handleChange}
          style={{ margin: "20px" }}
        />
        <button type="submit">Add new color</button>
      </form>
    </div>
  );
};

export default AddColorForm;
