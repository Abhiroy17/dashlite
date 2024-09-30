import React from "react";
import { render, screen } from "@testing-library/react";
import ActivityItem from "../components/Rightbar/ActivityFeed/ActivityItem";

describe("ActivityItem", () => {
  const mockProps = {
    icon: "http://example.com/icon.png",
    title: "Test Activity",
    time: "5 minutes ago",
  };

  test("renders activity title", () => {
    render(<ActivityItem {...mockProps} />);
    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders activity time", () => {
    render(<ActivityItem {...mockProps} />);
    const timeElement = screen.getByText(mockProps.time);
    expect(timeElement).toBeInTheDocument();
  });

  test("renders activity icon", () => {
    render(<ActivityItem {...mockProps} />);
    const iconElement = screen.getByRole("img");
    expect(iconElement).toHaveAttribute("src", mockProps.icon);
  });
});
