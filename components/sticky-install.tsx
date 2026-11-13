"use client";

import { useEffect, useState } from "react";

const KEY = "vely_sticky_install_dismissed";

/** Small QR card pinned bottom-left on desktop so a laptop visitor can install on their phone. */
export function StickyInstall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(KEY) === "1") return;
    } catch {
      // ignore storage errors
    }
    const timer = window.setTimeout(() => setVisible(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(KEY, "1");
    } catch {
      // ignore storage errors
    }
  };

  return (
    <aside className={`sticky-install${visible ? " sticky-install--visible" : ""}`} aria-label="Install Vely on your phone">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/qr-play.svg" alt="QR code linking to Vely on Google Play" width={84} height={84} loading="lazy" />
      <div>
        <strong>Scan to install</strong>
        <span>Opens Vely on Google Play on your Android phone.</span>
      </div>
      <button type="button" onClick={dismiss} aria-label="Dismiss">×</button>
    </aside>
  );
}
