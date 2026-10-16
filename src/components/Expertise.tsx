const items = [
  { title: "Smart contract engineering", body: "Contract architecture, token standards, access control and test-driven development for EVM-based applications.", tags: ["Solidity", "Foundry", "Slither", "OpenZeppelin", "ERC-20 / 721"] },
  { title: "Web3 frontend development", body: "Wallet-connected experiences with clear signing flows, transaction feedback and responsive, accessible interfaces.", tags: ["React", "Next.js", "TypeScript", "Wagmi / Viem", "WalletConnect"] },
  { title: "The connective layer", body: "Bringing contracts and interfaces together through chain data, Chainlink price feeds, Etherscan verification and practical integration testing.", tags: ["Chainlink", "Etherscan", "Git", "Integration testing"] },
];

export default function Expertise() {
  return (
    <section id="expertise" className="band expertise">
      <div className="wrap split">
        <div>
          <span className="mono faint"><span className="accent">03</span> &nbsp;Expertise</span>
          <h2 className="display">From first principles to production.</h2>
          <p className="muted small">A connected toolkit for building decentralized products, end to end.</p>
          <hr className="short" />
        </div>
        <ol className="skills">
          {items.map((it, i) => (
            <li key={it.title}>
              <span className="mono faint idx">0{i + 1}</span>
              <div>
                <h3>{it.title}</h3>
                <p className="muted small">{it.body}</p>
                <ul className="tags">{it.tags.map((t) => <li key={t} className="mono">{t}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}