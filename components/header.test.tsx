import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Header } from "./header";

vi.mock("@/lib/analytics", () => ({ trackEvent: vi.fn() }));

describe("Header", () => {
  it("exposes navigation and toggles the mobile menu", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Safety" })).toHaveAttribute("href", "/safety");
    const button = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});
