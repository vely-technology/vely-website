"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/site";
import { Icon, Logo } from "./icons";
import { StoreButton } from "./store-button";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="logo-link"><Logo /></Link>
        <button className="menu-button" aria-expanded={open} aria-controls="site-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav id="site-nav" className={`site-nav${open ? " site-nav--open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <StoreButton location="header" compact />
        </nav>
      </div>
    </header>
  );
}
