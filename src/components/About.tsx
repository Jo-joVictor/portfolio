export default function About() {
  return (
    <section id="about" className="band about">
      <div className="wrap split">
        <div>
          <span className="mono faint"><span className="accent">02</span> &nbsp;A little context</span>
          <h2 className="display">The contract is only <em>half the story.</em></h2>
          <p className="muted small">The other half is the person using it. I care about the space between reliable on-chain logic and a product someone can understand without a manual.</p>
        </div>
        <div>
          <p className="lead">I’m Jojo — a developer working across smart contracts and Web3 frontends. My approach connects thoughtful architecture with considered interaction design.</p>
          <p className="muted small">I like making complex systems legible: explicit permissions, predictable transaction flows, useful feedback and interfaces that respect the user’s attention. Good engineering should be felt, not explained.</p>
          <div className="meta-row rule"><span className="accent">Think in systems.</span><span className="accent">Build for people.</span></div>
        </div>
      </div>
    </section>
  );
}