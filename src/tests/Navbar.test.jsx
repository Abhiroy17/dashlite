import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/navbar/Navbar";

test("renders header with search input", () => {
  render(<Navbar />);
  const searchInput = screen.getByPlaceholderText(/search/i);
  expect(searchInput).toBeInTheDocument();
});

test("renders notification, settings, and profile icons", () => {
  render(<Navbar />);
  const notificationIcon = screen.getByLabelText(/show notifications/i);
  const settingsIcon = screen.getByLabelText(/open settings/i);
  const profileIcon = screen.getByLabelText(/open user profile/i);
  expect(notificationIcon).toBeInTheDocument();
  expect(settingsIcon).toBeInTheDocument();
  expect(profileIcon).toBeInTheDocument();
});
