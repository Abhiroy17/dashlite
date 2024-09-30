import React from "react";
import { render, screen } from "@testing-library/react";
import TopSellingProducts from "./TopSellingProducts";

describe("TopSellingProducts", () => {
  test("renders the component", () => {
    render(<TopSellingProducts />);
    expect(screen.getByText("Top Selling Products")).toBeInTheDocument();
  });

  test("displays correct table headers", () => {
    render(<TopSellingProducts />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Quantity")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
  });

  test("displays correct number of product rows", () => {
    render(<TopSellingProducts />);
    const productRows = screen.getAllByRole("row").slice(1); // Exclude header row
    expect(productRows).toHaveLength(5);
  });

  test("displays correct product information", () => {
    render(<TopSellingProducts />);
    expect(screen.getByText("ASOS Ridley High Waist")).toBeInTheDocument();
    expect(screen.getByText("$79.49")).toBeInTheDocument();
    expect(screen.getByText("82")).toBeInTheDocument();
    expect(screen.getByText("$6,518.18")).toBeInTheDocument();
  });
});
