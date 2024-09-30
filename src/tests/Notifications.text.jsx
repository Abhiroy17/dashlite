import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notifications from "../components/rightbar/Notifications";

describe("Notifications", () => {
  test("renders notification list with correct title", () => {
    render(<Notifications />);
    expect(screen.getByText("Notifications")).toBeInTheDocument();
  });

  test("renders correct number of notification items", () => {
    render(<Notifications />);
    const notificationItems = screen.getAllByRole("img", { hidden: true });
    expect(notificationItems).toHaveLength(4);
  });

  test("renders notification items with correct content", () => {
    render(<Notifications />);
    expect(
      screen.getByText("You have a bug that needs to be fixed.")
    ).toBeInTheDocument();
    expect(screen.getByText("New user registered")).toBeInTheDocument();
    expect(screen.getByText("Andi Lane subscribed to you")).toBeInTheDocument();
  });
});
