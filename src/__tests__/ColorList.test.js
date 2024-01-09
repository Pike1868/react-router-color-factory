import React from "react";
import { render, screen } from "@testing-library/react";
import ColorList from "../components/ColorList";
import { MemoryRouter } from "react-router-dom";

const initialColors = [
  { name: "red", hex: "#ff0000" },
  { name: "green", hex: "#008000" },
  { name: "blue", hex: "#0000ff" },
];

//Smoke Test
test("renders ColorList without crashing", () => {
  render(
    <MemoryRouter>
      <ColorList colorsArr={initialColors} />
    </MemoryRouter>
  );
});

//Snapshot Test
test("ColorList component matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <ColorList colorsArr={initialColors} />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});

test("displays ColorList component msg", () => {
  render(
    <MemoryRouter>
      <ColorList colorsArr={initialColors} />
    </MemoryRouter>
  );
  const msg = screen.getByText("Please select a color:");
  expect(msg).toBeInTheDocument();
});
