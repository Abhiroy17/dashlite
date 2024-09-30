import React from "react";
import { render, screen } from "@testing-library/react";
import RevenueTag from "./RevenueTag";

describe("RevenueTag", () => {
  const mockProps = {
    icon: "test-icon.png",
    label: "Test Label",
    value: "$100",
  };

  test("renders label", () => {
    render(<RevenueTag {...mockProps} />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("renders value", () => {
    render(<RevenueTag {...mockProps} />);
    const valueElement = screen.getByText(/\$100/i);
    expect(valueElement).toBeInTheDocument();
  });

  test("renders icon", () => {
    render(<RevenueTag {...mockProps} />);
    const iconElement = screen.getByRole("img");
    expect(iconElement).toHaveAttribute("src", "test-icon.png");
  });
});
