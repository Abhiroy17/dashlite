import React from "react";
import { render, screen } from "@testing-library/react";
import Projections from "../../components/charts/projections/Projections";

describe("ProjectionsVsActuals", () => {
  test("renders the component", () => {
    render(<Projections />);
    const titleElement = screen.getByText(/Projections vs Actuals/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the chart", () => {
    render(<Projections />);
    const chartElement = screen.getByRole("img");
    expect(chartElement).toBeInTheDocument();
  });
});
