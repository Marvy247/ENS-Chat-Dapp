"use client";

import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const { address, isConnected } = useAccount();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 m-auto items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2" href="/">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-lg hidden sm:block">ENS Chat</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {isConnected && address && (
            <div className="hidden md:flex items-center space-x-2 text-sm text-green-600 animate-pulse">
              <Avatar className="w-6 h-6">
                <AvatarImage src={`https://metadata.ens.domains/mainnet/avatar/${address}`} />
                <AvatarFallback className="text-xs">
                  {address.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span>Connected</span>
            </div>
          )}
          <ConnectButton showBalance={false} chainStatus="icon" accountStatus="avatar" />
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
