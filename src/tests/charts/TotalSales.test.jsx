import React from "react";
import { render, screen } from "@testing-library/react";
import TotalSales from "./TotalSales";

describe("TotalSales", () => {
  test("renders TotalSales component", () => {
    render(<TotalSales />);
    expect(screen.getByText("Total Sales")).toBeInTheDocument();
    expect(screen.getByText("Direct")).toBeInTheDocument();
    expect(screen.getByText("Affiliate")).toBeInTheDocument();
    expect(screen.getByText("Sponsored")).toBeInTheDocument();
    expect(screen.getByText("E-mail")).toBeInTheDocument();
    expect(screen.getByText("38.6%")).toBeInTheDocument();
  });
});
