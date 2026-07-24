import Image from "next/image";
import { Icon } from "./icons";

export function PhoneShowcase({ variant = "discover" }: { variant?: "discover" | "chat" | "profile" }) {
  return (
    <div className={`phone phone--${variant}`} aria-label={`Illustration of Vely's ${variant} screen`} role="img">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="app-top">
          <span className="mini-logo"><Image src="/brand-mark.png" alt="" width={18} height={18} />Vely</span>
          <span className="avatar-dot"><Image src="/brand-mark.png" alt="" width={15} height={15} /></span>
        </div>
        {variant === "discover" && <DiscoverScreen />}
        {variant === "chat" && <ChatScreen />}
        {variant === "profile" && <ProfileScreen />}
      </div>
    </div>
  );
}

function DiscoverScreen() {
  return <><div className="discovery-copy"><small>NEAR YOU</small><h3>Find your people</h3></div><div className="profile-card"><div className="profile-art"><span>AS</span><i className="art-orb art-orb--one"/><i className="art-orb art-orb--two"/></div><div className="profile-meta"><div><h4>Aarav & Sana <span>✓</span></h4><p><Icon name="pin" size={13}/> Pune · 4 km away</p></div><strong>Couple</strong></div><p className="profile-bio">Coffee, live music, and finding the city’s best weekend spots.</p></div><div className="card-actions"><button aria-label="Pass">×</button><button className="like" aria-label="Like"><Icon name="heart" size={23}/></button><button aria-label="More">•••</button></div></>;
}

function ChatScreen() {
  return <><div className="chat-heading"><div className="chat-avatar">RJ</div><div><h3>Rhea & Jai</h3><span>Matched today</span></div></div><div className="messages"><div className="bubble bubble--in">Hey! That pottery place looks fun 👋</div><div className="bubble bubble--out">It is! Want to plan a weekend session?</div><div className="bubble bubble--in">Absolutely. Saturday works for us ✨</div></div><div className="message-box"><span>Write a message…</span><button aria-label="Send message">↑</button></div></>;
}

function ProfileScreen() {
  return <><div className="profile-head"><div className="profile-avatar">KM</div><h3>Kabir</h3><p><Icon name="pin" size={13}/> Pune</p><span className="verified"><Icon name="shield" size={14}/> Verified</span></div><div className="profile-stats"><div><strong>12</strong><span>Matches</span></div><div><strong>8</strong><span>Interests</span></div><div><strong>4</strong><span>Chats</span></div></div><div className="interest-list"><span>Food trails</span><span>Travel</span><span>Live music</span><span>Fitness</span></div><div className="safety-card"><Icon name="shield"/><div><strong>Your controls</strong><p>Manage visibility, reports, and blocked profiles.</p></div></div></>;
}
