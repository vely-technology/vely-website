import Link from "next/link";
import { PLAY_STORE_URL, SOCIAL_LINKS, SUPPORT_EMAIL } from "@/lib/site";
import { Logo } from "./icons";
import { TrackedEmail } from "./tracked-link";

const groups = [
  { title: "Explore", links: [["Features", "/#features"], ["About", "/about"], ["Safety", "/safety"], ["Support", "/support"], ["Follow Vely", "/socials"]] },
  { title: "Discover Vely", links: [["Vely App", "/vely-app"], ["Best Dating App in India", "/best-dating-app-in-india"], ["Dating App for Couples", "/dating-app-for-couples"], ["Feeld Alternative", "/feeld-alternative"], ["3Fun Alternative", "/3fun-alternative"], ["Nymph Alternative", "/nymph-alternative"], ["Dating App for Singles in India", "/dating-app-for-singles-in-india"], ["Safe Dating App for Women", "/safe-dating-app-for-women"], ["Dating Tips for Introverts", "/dating-tips-for-introverts"], ["US Couples", "/dating-app-for-couples-in-us"], ["US Singles", "/dating-app-for-singles-in-us"], ["UK Couples", "/dating-app-for-couples-in-uk"], ["UK Singles", "/dating-app-for-singles-in-uk"], ["Canada Couples", "/dating-app-for-couples-in-canada"], ["Canada Singles", "/dating-app-for-singles-in-canada"], ["Indian Couples", "/dating-app-for-couples-in-india"], ["Married Couples", "/dating-app-for-married-couples"], ["Singles 30+", "/dating-app-for-30-plus-singles"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Delete account", "/delete-account"], ["Child safety", "/child-safety"]] },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro"><Logo /><p>Social discovery for singles and couples who want better connections.</p><TrackedEmail email={SUPPORT_EMAIL}/><div className="footer-socials"><h2>Follow Vely</h2>{SOCIAL_LINKS.map(({ label, href }) => <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}<a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">Google Play</a></div></div>
        {groups.map((group) => <div key={group.title} className="footer-group"><h2>{group.title}</h2>{group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>)}
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Vely / MettaAi</span><span>Made thoughtfully in Pune, India</span></div>
    </footer>
  );
}
