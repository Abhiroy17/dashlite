import React from "react";
import { render, screen } from "@testing-library/react";
import RevenueByLocation from "./RevenueByLocation";

describe("RevenueByLocation", () => {
  test("renders the component", () => {
    render(<RevenueByLocation />);
    const titleElement = screen.getByText(/Revenue by Location/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("displays all location names", () => {
    render(<RevenueByLocation />);
    expect(screen.getByText("New York")).toBeInTheDocument();
    expect(screen.getByText("San Francisco")).toBeInTheDocument();
    expect(screen.getByText("Sydney")).toBeInTheDocument();
    expect(screen.getByText("Singapore")).toBeInTheDocument();
  });

  test("displays all revenue values", () => {
    render(<RevenueByLocation />);
    expect(screen.getByText("72K")).toBeInTheDocument();
    expect(screen.getByText("39K")).toBeInTheDocument();
    expect(screen.getByText("25K")).toBeInTheDocument();
    expect(screen.getByText("61K")).toBeInTheDocument();
  });
});
