import { site } from "@/data/site";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
];

export default function Header() {
  return (
    <header className="header wrap">
      <a href="#top" className="logo" aria-label="Jojo Victor, home">jv<span className="dot">.</span></a>
      <nav aria-label="Primary">
        {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        <a href={site.upwork} target="_blank" rel="noreferrer">Contact ↗</a>
      </nav>
    </header>
  );
}