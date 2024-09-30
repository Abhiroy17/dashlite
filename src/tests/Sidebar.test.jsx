// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Sidebar from "../components/sidebar/Sidebar";

// describe("Sidebar", () => {
//   test("renders Sidebar component", () => {
//     render(
//       <Router>
//         <Sidebar />
//       </Router>
//     );
//     expect(screen.getByText("ByeWind")).toBeInTheDocument();
//     expect(screen.getByText("Dashboards")).toBeInTheDocument();
//     expect(screen.getByText("Pages")).toBeInTheDocument();
//   });

//   test("expands and collapses Default section", () => {
//     render(
//       <Router>
//         <Sidebar />
//       </Router>
//     );
//     const defaultButton = screen.getByText("Default");
//     fireEvent.click(defaultButton);
//     expect(screen.queryByText("Default")).toBeInTheDocument();
//     fireEvent.click(defaultButton);
//     expect(screen.queryByText("Default")).toBeInTheDocument();
//   });

//   test("expands and collapses User Profile section", () => {
//     render(
//       <Router>
//         <Sidebar />
//       </Router>
//     );
//     const userProfileButton = screen.getByText("User Profile");
//     fireEvent.click(userProfileButton);
//     expect(screen.queryByText("User Profile")).toBeInTheDocument();
//     fireEvent.click(userProfileButton);
//     expect(screen.queryByText("User Profile")).toBeInTheDocument();
//   });

//   test("expands and collapses eCommerce section", () => {
//     render(
//       <Router>
//         <Sidebar />
//       </Router>
//     );
//     const eCommerceButton = screen.getByText("eCommerce");
//     fireEvent.click(eCommerceButton);
//     expect(screen.queryByText("eCommerce")).toBeInTheDocument();
//     fireEvent.click(eCommerceButton);
//     expect(screen.queryByText("eCommerce")).toBeInTheDocument();
//   });

//   test("expands and collapses Projects section", () => {
//     render(
//       <Router>
//         <Sidebar />
//       </Router>
//     );
//     const projectsButton = screen.getByText("Projects");
//     fireEvent.click(projectsButton);
//     expect(screen.queryByText("Projects")).toBeInTheDocument();
//     fireEvent.click(projectsButton);
//     expect(screen.queryByText("Projects")).toBeInTheDocument();
//   });
// });
