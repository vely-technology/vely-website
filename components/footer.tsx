import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/site";
import { Logo } from "./icons";
import { TrackedEmail } from "./tracked-link";

const groups = [
  { title: "Explore", links: [["Features", "/#features"], ["About", "/about"], ["Safety", "/safety"], ["Support", "/support"]] },
  { title: "Discover Vely", links: [["Dating App for Couples", "/dating-app-for-couples"], ["Dating App for Singles in India", "/dating-app-for-singles-in-india"], ["Best Dating App in Pune", "/best-dating-app-in-pune"], ["Safe Dating App in India", "/safe-dating-app-in-india"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Delete account", "/delete-account"], ["Child safety", "/child-safety"]] },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro"><Logo /><p>Social discovery for singles and couples who want better connections.</p><TrackedEmail email={SUPPORT_EMAIL}/></div>
        {groups.map((group) => <div key={group.title} className="footer-group"><h2>{group.title}</h2>{group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>)}
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Vely / MettaAi</span><span>Made thoughtfully in Pune, India</span></div>
    </footer>
  );
}
