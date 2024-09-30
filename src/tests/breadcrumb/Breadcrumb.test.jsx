import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb", () => {
  test("renders without crashing", () => {
    render(<Breadcrumb />);
  });

  test("displays correct breadcrumb text", () => {
    render(<Breadcrumb />);
    expect(screen.getByText("Dashboards")).toBeInTheDocument();
    expect(screen.getByText("/")).toBeInTheDocument();
    expect(screen.getByText("Default")).toBeInTheDocument();
  });

  test("renders correct number of breadcrumb items", () => {
    render(<Breadcrumb />);
    const breadcrumbItems = screen.getAllByText((content, element) => {
      return ["Dashboards", "Default"].includes(content);
    });
    expect(breadcrumbItems).toHaveLength(2);
  });
});
