import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserCard from "../components/UserCard";

const mockUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  company: { name: "Acme Inc" },
};

describe("UserCard", () => {
  test("renders user info correctly", () => {
    render(
      <MemoryRouter>
        <UserCard user={mockUser} query="" />
      </MemoryRouter>
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("Acme Inc")).toBeInTheDocument();
  });

  test("highlights when query matches", () => {
    render(
      <MemoryRouter>
        <UserCard user={mockUser} query="john" />
      </MemoryRouter>
    );

    const nameElement = screen.getByText("John Doe");
    expect(nameElement).toHaveClass("text-[rgba(255,255,255,0.5)]");

    const card = nameElement.closest("li");
    expect(card).toHaveClass("ring-2");
  });

  test("does not highlight when query does not match", () => {
    render(
      <MemoryRouter>
        <UserCard user={mockUser} query="jane" />
      </MemoryRouter>
    );

    const nameElement = screen.getByText("John Doe");
    expect(nameElement).not.toHaveClass("text-[rgba(255,255,255,0.5)]");

    const card = nameElement.closest("li");
    expect(card).not.toHaveClass("ring-2");
  });
});
