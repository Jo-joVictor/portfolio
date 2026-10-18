export type Contract = { label: string; address: string; url: string };
export type Project = {
  slug: string;
  kind: "frontend" | "contract";
  title: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  images?: { src: string; alt: string }[];
  tint?: string;
  contracts?: Contract[];
};

const scan = "https://sepolia.etherscan.io/address/";

export const projects: Project[] = [
  {
    slug: "nft-minting",
    kind: "frontend",
    title: "NFT Minting Website",
    description:
      "A minting site for a 1,000-edition ERC-721 collection. Connect a wallet, choose a quantity and mint on Sepolia, with live supply and per-wallet limits shown before you sign.",
    stack: ["Next.js", "TypeScript", "Wagmi", "Viem", "WalletConnect", "CSS"],
    github: "https://github.com/Jo-joVictor/NFTMINTINGWEB3",
    live: "https://nftmintingweb-3-x5sg.vercel.app/",
    tint: "#2b2b2e",
    images: [{ src: "/projects/nft-mint.png", alt: "Jojo NFT minting page showing the mint panel and collection artwork" }],
  },
  {
    slug: "fundme",
    kind: "frontend",
    title: "FundMe Crowdfunding dApp",
    description:
      "A Web3 crowdfunding dApp for ETH contributions with real-time transaction tracking, transparent fund analytics and owner-controlled withdrawals. A Chainlink price feed enforces the $50 minimum on Ethereum Sepolia.",
    stack: ["Next.js", "TypeScript", "Wagmi", "Viem", "WalletConnect", "Chainlink", "CSS"],
    github: "https://github.com/Jo-joVictor/FundMeWEB3dap",
    live: "https://fund-me-web-3dap-6ojp.vercel.app/",
    tint: "#bdb4e6",
    images: [
      { src: "/projects/fundme-dashboard.png", alt: "FundMe dashboard with the contribution form" },
      { src: "/projects/fundme-transparency.png", alt: "FundMe transparency page with contract details and activity chart" },
    ],
  },
  {
    slug: "token-launch",
    kind: "frontend",
    title: "Presale, Vesting & Staking dApp",
    description:
      "A token launch dApp covering ETH presales, automated vesting and staking rewards. Includes a live sale countdown, real-time tokenomics and owner-controlled protocol management on Ethereum Sepolia.",
    stack: ["Next.js", "TypeScript", "Wagmi", "Viem", "WalletConnect", "CSS"],
    github: "https://github.com/Jo-joVictor/Vesting-smart-contract-and-frontend/tree/main/frontend",
    live: "https://frontend-zeta-gules-75.vercel.app/",
    tint: "#dcd8ce",
    images: [
      { src: "/projects/presale.png", alt: "Nexora presale page with countdown and amount raised" },
      { src: "/projects/tokenomics.png", alt: "Nexora tokenomics page showing a 40/30/30 allocation" },
    ],
  },

    {
    slug: "nft-marketplace-frontend",
    kind: "frontend",
    title: "Lumina NFT Marketplace",
    description:
      "A Web3 NFT marketplace frontend supporting ERC-721 and ERC-1155 trading, fixed-price listings and English auctions. Includes NFT discovery, creator royalties, secure withdrawals and owner-controlled marketplace management on Ethereum Sepolia.",
    stack: ["React", "TypeScript", "Wagmi", "Viem", "CSS"],
    github: "https://github.com/Jo-joVictor/marketplace-website",
    live: "https://marketplace-website-pi.vercel.app/",
    tint: "#2f2a3d",
    images: [
      { src: "/projects/marketplace-explore.png", alt: "Lumina explore page with featured fixed-price listings and a live auction" },
      { src: "/projects/marketplace-listing.png", alt: "Lumina listing page for an English auction with bid details" },
    ],
  },

  {
    slug: "token-launch-contracts",
    kind: "contract",
    title: "Presale, Vesting & Staking Protocol",
    description:
      "A token launch protocol with a fixed-supply ERC-20, a multi-stage ETH presale with refund protection, automated vesting and reward-based staking. Built with OpenZeppelin and Foundry, and analysed with Slither.",
    stack: ["Solidity", "Foundry", "Slither", "OpenZeppelin", "Etherscan"],
    github: "https://github.com/Jo-joVictor/Vesting-smart-contract-and-frontend/tree/main/contracts",
    contracts: [
      { label: "Token", address: "0x15e3168E0F97dE45EA1f847A0906e3632E9C08c9", url: scan + "0x15e3168E0F97dE45EA1f847A0906e3632E9C08c9" },
      { label: "Presale", address: "0xf2A674660e8f54487D0c505a51Eea2851f924B6e", url: scan + "0xf2A674660e8f54487D0c505a51Eea2851f924B6e" },
      { label: "Vesting", address: "0xFA074F31635C720b61bc292B60980B48Ed31b179", url: scan + "0xFA074F31635C720b61bc292B60980B48Ed31b179" },
      { label: "Staking", address: "0xe57629CD9A8eE29865A409214F27A0434af4D1b9", url: scan + "0xe57629CD9A8eE29865A409214F27A0434af4D1b9" },
    ],
  },
  {
    slug: "nft-marketplace",
    kind: "contract",
    title: "NFT Marketplace",
    description:
      "A non-custodial ERC-721 marketplace supporting fixed-price sales, English auctions and Dutch auctions. Uses pull payments, an automated 2% marketplace fee, reentrancy protection and owner-controlled emergency pausing.",
    stack: ["Solidity", "Foundry", "OpenZeppelin", "Etherscan"],
    github: "https://github.com/Jo-joVictor/FOUNDRYNFTMARKETPLACE",
    contracts: [
      { label: "Marketplace", address: "0xFcD9CfD213DBE5FBc7c2c87e6a197eC7F0cfE323", url: scan + "0xFcD9CfD213DBE5FBc7c2c87e6a197eC7F0cfE323" },
    ],
  },
  {
    slug: "merkle-airdrop",
    kind: "contract",
    title: "Merkle Airdrop",
    description:
      "An ERC-20 airdrop system with gas-efficient Merkle proof verification, EIP-712 signature authentication and time-limited claims. Includes reentrancy protection and owner recovery of unclaimed tokens.",
    stack: ["Solidity", "Foundry", "JavaScript", "OpenZeppelin", "Etherscan"],
    github: "https://github.com/Jo-joVictor/Foundry-Merkle-Airdrop",
    contracts: [
      { label: "Airdrop", address: "0xbb62b57c42dd2665141ff1ea442d6f2a3256d345", url: scan + "0xbb62b57c42dd2665141ff1ea442d6f2a3256d345" },
    ],
  },
];