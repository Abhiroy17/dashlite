import React from "react";
import { render, screen } from "@testing-library/react";
import IconGroup from "./IconGroup";

describe("IconGroup", () => {
  test("renders without crashing", () => {
    render(<IconGroup />);
  });

  test("renders two icon buttons", () => {
    render(<IconGroup />);
    const iconButtons = screen.getAllByRole("img");
    expect(iconButtons).toHaveLength(2);
  });

  
});
