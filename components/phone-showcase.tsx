import Image from "next/image";
import { Icon } from "./icons";

/**
 * Illustrative recreations of the Vely app screens. Layout mirrors the real app
 * (Discover card, couple profile, messages list, four tabs) but every name,
 * message and number here is invented and the photos are stock test images.
 */
export function PhoneShowcase({ variant = "discover" }: { variant?: "discover" | "profile" | "messages" }) {
  const label = { discover: "Discover", profile: "Profile", messages: "Messages" }[variant];
  return (
    <div className={`phone phone--${variant}`} aria-label={`Illustration of Vely's ${label} screen`} role="img">
      <div className="phone-speaker" />
      <div className="phone-screen">
        {variant === "discover" && <DiscoverScreen />}
        {variant === "profile" && <ProfileScreen />}
        {variant === "messages" && <MessagesScreen />}
        <TabBar active={variant} />
      </div>
    </div>
  );
}

function AppHeader({ title, back = false }: { title?: string; back?: boolean }) {
  return (
    <div className="m-header">
      {back ? <span className="m-back">‹</span> : <span className="m-brand"><Image src="/brand-mark.png" alt="" width={16} height={16} />Vely</span>}
      {title && <span className="m-title">{title}</span>}
      <span className="m-header-icon"><Icon name="filter" size={14} /></span>
    </div>
  );
}

function TabBar({ active }: { active: string }) {
  const tabs = [
    { key: "discover", label: "Discover", icon: "heart" },
    { key: "likes", label: "Likes", icon: "spark" },
    { key: "messages", label: "Messages", icon: "chat" },
    { key: "profile", label: "Profile", icon: "user" },
  ];
  return (
    <div className="m-tabs">
      {tabs.map((t) => (
        <span key={t.key} className={t.key === active ? "m-tab m-tab--active" : "m-tab"}>
          <Icon name={t.icon} size={16} />
          {t.label}
        </span>
      ))}
    </div>
  );
}

function DiscoverScreen() {
  return (
    <>
      <AppHeader />
      <div className="m-card">
        <Image src="/images/profiles/single-1.webp" alt="" fill sizes="260px" />
        <span className="m-chip m-chip--match">82% match</span>
        <div className="m-card-body">
          <strong>Priya, 28</strong>
          <span className="m-meta"><Icon name="pin" size={11} /> 3 km away · Active recently</span>
          <span className="m-chip m-chip--tag">F28</span>
          <small>WHY YOU MIGHT CONNECT</small>
          <p>You both picked weekend food trails and live music.</p>
        </div>
      </div>
      <div className="m-actions">
        <span className="m-action">×</span>
        <span className="m-action m-action--like"><Icon name="heart" size={20} /></span>
      </div>
    </>
  );
}

function ProfileScreen() {
  return (
    <>
      <AppHeader title="Profile" />
      <div className="m-panel m-profile-head">
        <div className="m-avatar"><Image src="/images/profiles/couple-1.webp" alt="" fill sizes="56px" /></div>
        <div>
          <strong>Aarav &amp; Sana <span className="m-verified-dot">✓</span></strong>
          <span>31 &amp; 29 years old</span>
          <span><Icon name="pin" size={11} /> Mumbai</span>
        </div>
      </div>
      <div className="m-panel m-verified">
        <span className="m-verified-icon"><Icon name="shield" size={14} /></span>
        <div>
          <strong>Couple verified</strong>
          <span>Your partner confirmed this couple profile. The badge is visible to others.</span>
        </div>
      </div>
      <div className="m-panel">
        <div className="m-row"><strong>Profile completion</strong><b>100%</b></div>
        <div className="m-bar"><i /></div>
        <ul className="m-checks">
          <li><Icon name="check" size={11} /> Basic details</li>
          <li><Icon name="check" size={11} /> Partner details</li>
          <li><Icon name="check" size={11} /> Relationship details</li>
          <li><Icon name="check" size={11} /> Profile photo</li>
        </ul>
      </div>
    </>
  );
}

function MessagesScreen() {
  const chats = [
    { img: "/images/profiles/couple-2.webp", name: "Rhea & Jai", preview: "Saturday works for us!", time: "2m", unread: true },
    { img: "/images/profiles/single-2.webp", name: "Meera", preview: "That café looks great", time: "1h", unread: false },
    { img: "/images/profiles/couple-ff-1.webp", name: "Anaya & Zoe", preview: "We're in for the food walk", time: "3h", unread: false },
    { img: "/images/profiles/single-3.webp", name: "Kavya", preview: "Nice to match with you both", time: "1d", unread: false },
  ];
  return (
    <>
      <AppHeader title="Messages" />
      <ul className="m-list">
        {chats.map((c) => (
          <li key={c.name} className={c.unread ? "m-list-item m-list-item--unread" : "m-list-item"}>
            <span className="m-avatar m-avatar--sm"><Image src={c.img} alt="" fill sizes="40px" /></span>
            <span className="m-list-text"><strong>{c.name}</strong><span>{c.preview}</span></span>
            <span className="m-list-time">{c.time}</span>
          </li>
        ))}
      </ul>
      <div className="m-empty-hint">Chats open only after a mutual match.</div>
    </>
  );
}
