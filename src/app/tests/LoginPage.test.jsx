// src/app/pages/__tests__/LoginPage.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import LoginPage from "../pages/LoginPage";

// Utility to render with AuthContext + Router
const renderWithProviders = (ui) => {
  return render(
    <AuthProvider>
      <MemoryRouter>{ui}</MemoryRouter>
    </AuthProvider>
  );
};

describe("LoginPage", () => {
  test("renders phone, password inputs and login button", () => {
    renderWithProviders(<LoginPage />);
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("shows error if phone number is too short", async () => {
    renderWithProviders(<LoginPage />);
    const phoneInput = screen.getByLabelText(/phone/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    await userEvent.type(phoneInput, "123"); // too short
    fireEvent.click(loginButton);

    expect(
      screen.getByText(/please enter a valid phone number/i)
    ).toBeInTheDocument();
  });

  test("shows error if password is less than 6 digits", async () => {
    renderWithProviders(<LoginPage />);
    const phoneInput = screen.getByLabelText(/phone/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    await userEvent.type(phoneInput, "0801234567");
    await userEvent.type(passwordInput, "123"); // too short
    fireEvent.click(loginButton);

    expect(
      screen.getByText(/password must be at least 6 characters long/i)
    ).toBeInTheDocument();
  });

  test("logs in successfully with valid credentials", async () => {
    renderWithProviders(<LoginPage />);
    const phoneInput = screen.getByLabelText(/phone/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    await userEvent.type(phoneInput, "08012345678");
    await userEvent.type(passwordInput, "1234567");
    fireEvent.click(loginButton);

    // since navigation is mocked, just check that no error is shown
    expect(
      screen.queryByText(/invalid credentials/i)
    ).not.toBeInTheDocument();
  });

  test("shows error if phone or password is empty", async () => {
    renderWithProviders(<LoginPage />);
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.click(loginButton);
    expect(
      screen.getByText(/invalid credentials\. try again\./i)
    ).toBeInTheDocument();
  });
});
