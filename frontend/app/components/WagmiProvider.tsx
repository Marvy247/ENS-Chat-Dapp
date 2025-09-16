"use client";

import React, { useEffect, useState } from "react";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { useTheme } from 'next-themes';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
} from 'wagmi/chains';

const liskSepolia = {
  id: 4202,
  name: "Lisk Sepolia",
  network: "lisk-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://rpc.sepolia-api.lisk.com"] },
    public: { http: ["https://rpc.sepolia-api.lisk.com"] },
  },
  blockExplorers: {
    default: { name: "Lisk Sepolia Explorer", url: "https://sepolia-blockscout.lisk.com" },
  },
  testnet: true,
};

const { chains, publicClient } = configureChains(
  [liskSepolia, mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'ENS Chat Dapp',
  projectId: 'YOUR_PROJECT_ID', // Get one at https://cloud.walletconnect.com
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WagmiProviderComponent({ children }: { children: any }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={resolvedTheme === 'dark' ? darkTheme() : lightTheme()}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
