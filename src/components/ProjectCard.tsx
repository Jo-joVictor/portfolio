import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p, index }: { p: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const two = (p.images?.length ?? 0) > 1;
  return (
    <article className="project" id={p.slug}>
      {p.kind === "frontend" ? (
        <div className={`stage ${two ? "two" : ""}`} style={{ background: p.tint }}>
          {p.images!.map((img, i) => (
            <div key={img.src} className={`shot ${i === 0 ? "main" : "second"}`}>
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 900px) 90vw, 800px" priority={index === 0} />
            </div>
          ))}
        </div>
      ) : (
        <div className="stage ledger">
          <div className="ledger-card">
            <div className="ledger-head"><span>Deployed contracts</span><span className="badge">Sepolia</span></div>
            {p.contracts!.map((c) => (
              <a key={c.address} className="ledger-row" href={c.url} target="_blank" rel="noreferrer">
                <span className="mono faint">{c.label}</span>
                <span className="mono addr">{c.address.slice(0, 8)}…{c.address.slice(-6)}</span>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}
      <div className="project-meta">
        <div className="project-title">
          <span className="mono accent">{num}</span>
          <h3>{p.title}</h3>
          <span className="mono faint kind">{p.kind === "frontend" ? "Frontend" : "Smart contract"}</span>
        </div>
        <div>
          <p className="muted">{p.description}</p>
          <p className="mono faint stack">{p.stack.join(" / ")}</p>
          <div className="links">
            <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live demo ↗</a>}
            {p.contracts && p.contracts.length === 1 && (
              <a href={p.contracts[0].url} target="_blank" rel="noreferrer">Etherscan ↗</a>
            )}
            {p.contracts && p.contracts.length > 1 && <span className="mono faint">Etherscan links above</span>}
          </div>
        </div>
      </div>
    </article>
  );
}