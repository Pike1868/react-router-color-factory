import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

//Smoke Test
test("NavBar component renders without crashing", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
});

//Snapshot Test
test("NavBar component matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();

  const navHeading = screen.getByText("Welcome to Color Factory");

  expect(navHeading).toBeInTheDocument();
});
