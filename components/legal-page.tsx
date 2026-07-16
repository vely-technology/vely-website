import { PageHero } from "./page-hero";

export function LegalPage({ title, description, updated = "16 July 2026", children }: { title: string; description: string; updated?: string; children: React.ReactNode }) {
  return <><PageHero eyebrow={`Last updated ${updated}`} title={title} description={description}/><main className="shell legal-layout"><article className="legal-card">{children}</article></main></>;
}
