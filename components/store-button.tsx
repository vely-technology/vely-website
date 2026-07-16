"use client";

import { track } from "@vercel/analytics";
import { PLAY_STORE_URL } from "@/lib/site";
import { Icon } from "./icons";

export function StoreButton({ location = "unknown", compact = false }: { location?: string; compact?: boolean }) {
  return (
    <a
      className={`store-button${compact ? " store-button--compact" : ""}`}
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noreferrer"
      onClick={() => track("google_play_click", { location })}
      aria-label="Get Vely on Google Play (opens in a new tab)"
    >
      <span className="play-mark" aria-hidden="true">▶</span>
      <span><small>GET IT ON</small><strong>Google Play</strong></span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

export function IosBadge() {
  return <div className="ios-badge" aria-label="Vely for iOS is coming soon"><span aria-hidden="true">●</span><span><small>COMING SOON ON</small><strong>App Store</strong></span></div>;
}
