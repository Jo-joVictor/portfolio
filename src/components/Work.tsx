import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="work wrap">
      <div className="section-head">
        <div>
          <span className="mono faint"><span className="accent">01</span> &nbsp;Selected work</span>
          <h2 className="display">Shipped to testnet, <em>built for mainnet.</em></h2>
        </div>
        <p className="mono faint note">Six projects: three frontends, three smart contracts. All deployed on Ethereum Sepolia.</p>
      </div>
      {projects.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
    </section>
  );
}