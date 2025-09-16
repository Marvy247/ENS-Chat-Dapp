# ENS Chat Dapp

This project is a decentralized chat application powered by the Ethereum Name Service (ENS). It allows users to connect their Ethereum wallets, register ENS names, and engage in secure, private messaging on the blockchain.

## Features

- **ENS Registration:** Secure your digital identity by registering an ENS domain.
- **Decentralized Chat:** Engage in encrypted, censorship-resistant conversations.
- **Theme Toggle:** Switch between light, dark, and system themes seamlessly.
- **Wallet Integration:** Connect your Ethereum wallet using RainbowKit and Wagmi.
- **Responsive UI:** Built with Next.js, Tailwind CSS, and shadcn/ui components.

## Technology Stack

- **Frontend:** Next.js 13 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui components
- **Wallet & Blockchain:** RainbowKit, Wagmi, viem
- **Smart Contracts:** Solidity (found in `contracts/` directory)
- **Theme Management:** next-themes

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- An Ethereum wallet (e.g., MetaMask)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ENS-Chat-Dapp/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Use the theme toggle button to switch between light, dark, and system themes.
- Connect your Ethereum wallet using the wallet connect button.
- Register an ENS name if you don't have one.
- Start chatting securely with other ENS users.

## Project Structure

- `frontend/` - Next.js frontend application
- `contracts/` - Solidity smart contracts and tests
- `frontend/app/` - Next.js app directory with pages and components
- `frontend/components/` - Shared UI components
- `frontend/lib/` - Utility functions

## Troubleshooting

- If you encounter issues with wallet connection, ensure your wallet supports the configured chains.
- For theme issues, verify that your browser supports CSS variables and JavaScript is enabled.

## Contributing

Contributions are welcome! Please open issues or pull requests for bug fixes and feature requests.

## License

This project is licensed under the MIT License.
