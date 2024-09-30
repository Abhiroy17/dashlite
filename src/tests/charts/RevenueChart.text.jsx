import React from "react";
import { render, screen } from "@testing-library/react";
import RevenueChart from "./RevenueChart";

describe("RevenueChart", () => {
  test("renders revenue title", () => {
    render(<RevenueChart />);
    const titleElement = screen.getByText(/Revenue/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders current week tag", () => {
    render(<RevenueChart />);
    const currentWeekElement = screen.getByText(/Current Week/i);
    expect(currentWeekElement).toBeInTheDocument();
  });

  test("renders previous week tag", () => {
    render(<RevenueChart />);
    const previousWeekElement = screen.getByText(/Previous Week/i);
    expect(previousWeekElement).toBeInTheDocument();
  });

  test("renders chart", () => {
    render(<RevenueChart />);
    const chartElement = screen.getByRole("img");
    expect(chartElement).toBeInTheDocument();
  });
});
