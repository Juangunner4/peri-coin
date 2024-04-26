import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "./Header";

describe('Header Component', () => {
  test('renders the logo', () => {
    render(<Header />);
    expect(screen.getByTestId("navbar-logo")).toBeInTheDocument();
  });

  test('toggles the drawer on hamburger button click', () => {
    render(<Header />);
    const hamburgerButton = screen.getByTestId("hamburger-button");
    fireEvent.click(hamburgerButton);
    expect(screen.getByTestId("navbar-items")).toHaveStyle(`transform: translateX(0)`);
  });

  // Additional tests for checking links and other functionalities
});
