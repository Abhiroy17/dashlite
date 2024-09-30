import React from "react";
import { render, screen } from "@testing-library/react";
import IconBreadcrumb from "./IconBreadcrumb";

describe("IconBreadcrumb", () => {
  test("renders without crashing", () => {
    render(<IconBreadcrumb />);
  });

  test("displays correct breadcrumb text", () => {
    render(<IconBreadcrumb />);
    expect(screen.getByText("Dashboards")).toBeInTheDocument();
    expect(screen.getByText("/")).toBeInTheDocument();
    expect(screen.getByText("Default")).toBeInTheDocument();
  });

  test("renders two icon buttons", () => {
    render(<IconBreadcrumb />);
    const iconButtons = screen.getAllByRole("img");
    expect(iconButtons).toHaveLength(2);
  });
});
