import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import ColorDisplay from "./ColorDisplay";
import AddColorForm from "./AddColorForm";

/**
 * RouteList Component:
 *
 * Defines all routes for app
 * - "/colors": The homepage that displays a list of all available colors.
 * - "/colors/:color": A dynamic route for individual colors to get taken to a page that displays that color
 * - "/colors/new": Route that displays a form where users can add new colors to list.
 * - "/*": A catch-all route that redirects any paths not starting with "/colors/" back to the homepage ("/colors").
 *
 *
 */
const RouteList = ({ colorsArr, handleSubmit, handleChange, formData }) => {
  return (
    <Routes>
      <Route path="/colors" element={<ColorList colorsArr={colorsArr} />} />
      <Route
        path="/colors/:color"
        element={<ColorDisplay colorsArr={colorsArr} />}
      />

      <Route
        exact
        path="/colors/new"
        element={
          <AddColorForm
            colors={colorsArr}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
          />
        }
      />
      <Route path="/*" element={<Navigate to="/colors" />} />
    </Routes>
  );
};

export default RouteList;
