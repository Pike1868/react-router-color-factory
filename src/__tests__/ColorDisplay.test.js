import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import ColorDisplay from "../components/ColorDisplay";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    color: "red",
  }),
}));

describe("ColorDisplay Component Tests", () => {
  const initialColors = [
    { name: "red", hex: "#ff0000" },
    { name: "green", hex: "#008000" },
    { name: "blue", hex: "#0000ff" },
  ];

  //Smoke Test
  test("renders ColorDisplay without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/colors/red"]}>
        <ColorDisplay colorsArr={initialColors} />
      </MemoryRouter>
    );
    const colorText = screen.getByText("This is red.");
    expect(colorText).toBeInTheDocument();
  });

  //Snapshot Test
  test("ColorDisplay matches snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/colors/red"]}>
        <ColorDisplay colorsArr={initialColors} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
