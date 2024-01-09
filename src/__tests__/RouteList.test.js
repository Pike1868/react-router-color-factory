import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import RouteList from "../components/RouteList";

describe("RouteList Component Tests", () => {
  const initialColors = [
    { name: "red", hex: "#ff0000" },
    { name: "green", hex: "#008000" },
    { name: "blue", hex: "#0000ff" },
  ];
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const initialFormData = { name: "", hex: "#000000" };

  //Smoke Test
  test("RouteList renders without crashing", () => {
    render(
      <MemoryRouter>
        <RouteList
          colorsArr={initialColors}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={initialFormData}
        />
      </MemoryRouter>
    );
  });

  //Snapshot Test

  test("RouteList renders ColorList for '/colors' route", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/colors"]}>
        <RouteList
          colorsArr={initialColors}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={initialFormData}
        />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByText("Please select a color:")).toBeInTheDocument();
  });
});
