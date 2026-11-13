import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { StoreButton } from "./store-button";
import { trackEvent } from "@/lib/analytics";

vi.mock("@/lib/analytics", () => ({ trackEvent: vi.fn() }));

describe("StoreButton", () => {
  it("links to the Android listing and records its placement", () => {
    render(<StoreButton location="test"/>);
    const link = screen.getByRole("link", { name: /get it on google play/i });
    expect(link).toHaveAttribute("href", expect.stringContaining("id=com.vely.app"));
    fireEvent.click(link);
    expect(trackEvent).toHaveBeenCalledWith("google_play_click", expect.objectContaining({
      location: "test",
      page_path: expect.any(String),
      page_title: expect.any(String),
    }));
  });
});
