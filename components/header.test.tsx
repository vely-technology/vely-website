import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Header } from "./header";

vi.mock("@/lib/analytics", () => ({ trackEvent: vi.fn() }));

describe("Header", () => {
  it("exposes navigation and toggles the mobile menu", () => {
    render(<Header />);
    // next/link normalises the trailing slash in jsdom; the static build (trailingSlash: true) adds it back.
    expect(screen.getByRole("link", { name: "Safety" }).getAttribute("href")).toMatch(/^\/safety\/?$/);
    const button = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});
