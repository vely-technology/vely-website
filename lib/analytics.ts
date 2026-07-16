"use client";

type AnalyticsValue = string | number | boolean | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, parameters?: Record<string, AnalyticsValue>) {
  window.gtag?.("event", name, parameters);
}
