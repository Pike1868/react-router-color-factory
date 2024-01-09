import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AddColorForm from "../components/AddColorForm";

//Smoke Test
test("AddColorForm renders without crashing", () => {
  render(
    <MemoryRouter>
      <AddColorForm />
    </MemoryRouter>
  );
});

//Snapshot Test
test("AddColorForm matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <AddColorForm />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});

describe("AddColorForm Component Tests", () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const initialFormData = { name: "", hex: "#000000" };

  test("renders with initial form data", () => {
    render(
      <AddColorForm
        formData={initialFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
    const nameInput = screen.getByRole("textbox");
    const hexInput = screen.getByLabelText("Choose a color hex");

    expect(nameInput.value).toBe(initialFormData.name);
    expect(hexInput.value).toBe(initialFormData.hex);
  });

  test("calls handleChange on input change", () => {
    render(
      <AddColorForm
        formData={initialFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
    const nameInput = screen.getByRole("textbox");
    fireEvent.change(nameInput, { target: { value: "purple" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("calls handleSubmit on form submission", () => {
    render(
      <AddColorForm
        formData={initialFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
    const submitButton = screen.getByRole("button", { name: "Add new color" });
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
