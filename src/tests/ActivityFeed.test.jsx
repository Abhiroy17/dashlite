import React from "react";
import { render, screen } from "@testing-library/react";
import ActivityFeed from "../components/Rightbar/ActivityFeed/ActivityItem";

describe("ActivityFeed", () => {
  test("renders Activities title", () => {
    render(<ActivityFeed />);
    const titleElement = screen.getByText(/Activities/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders correct number of activity items", () => {
    render(<ActivityFeed />);
    const activityItems = screen.getAllByRole("listitem");
    expect(activityItems).toHaveLength(5);
  });

  it('renders all activity items', () => {
    render(
      <ThemeProvider theme={theme}>
        <ActivityFeed />
      </ThemeProvider>
    );
    expect(screen.getByText('You have a bug that needs to be fixed.')).toBeInTheDocument();
    expect(screen.getByText('59 minutes ago')).toBeInTheDocument();
    expect(screen.getByText('12 hours ago')).toBeInTheDocument();
  
});
