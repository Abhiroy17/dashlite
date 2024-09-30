import React from "react";
import { render } from "@testing-library/react";
import SearchIcon from "./SearchIcon";

describe("SearchIcon", () => {
  test("renders without crashing", () => {
    const { container } = render(<SearchIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test("has correct SVG properties", () => {
    const { container } = render(<SearchIcon />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toHaveAttribute("width", "16px");
    expect(svgElement).toHaveAttribute("height", "16px");
  });
});
