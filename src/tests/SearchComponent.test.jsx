import React from "react";
import { render, screen } from "@testing-library/react";
import SearchComponent from "./SearchComponent";

describe("SearchComponent", () => {
  test("renders search component", () => {
    render(<SearchComponent />);
    const searchText = screen.getByText(/Search/i);
    expect(searchText).toBeInTheDocument();
  });

  test("renders shortcut text", () => {
    render(<SearchComponent />);
    const shortcutText = screen.getByText("⌘/");
    expect(shortcutText).toBeInTheDocument();
  });

  test("renders search icon", () => {
    render(<SearchComponent />);
    const searchIcon = screen.getByTestId("SearchIcon");
    expect(searchIcon).toBeInTheDocument();
  });
});
