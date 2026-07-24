import Image from "next/image";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div className="shell narrow"><Image className="page-hero-mark" src="/brand-mark.png" alt="" width={54} height={54} /><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>;
}
