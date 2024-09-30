import React from "react";
import { render, screen } from "@testing-library/react";
import StatisticsCards from "../components/cards/StatisticsCards";

describe("StatisticsCards", () => {
  test("renders all cards with correct data", () => {
    render(<StatisticsCards />);

    expect(screen.getByText("Customers")).toBeInTheDocument();
    expect(screen.getByText("3,781")).toBeInTheDocument();
    expect(screen.getByText("+11.01%")).toBeInTheDocument();

    expect(screen.getByText("Orders")).toBeInTheDocument();
    expect(screen.getByText("1,219")).toBeInTheDocument();
    expect(screen.getByText("-0.03%")).toBeInTheDocument();

    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("$695")).toBeInTheDocument();
    expect(screen.getByText("+15.03%")).toBeInTheDocument();

    expect(screen.getByText("Growth")).toBeInTheDocument();
    expect(screen.getByText("30.1%")).toBeInTheDocument();
    expect(screen.getByText("+6.08%")).toBeInTheDocument();
  });
});
