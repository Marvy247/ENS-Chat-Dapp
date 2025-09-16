"use client";

import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
});

const RegisterENS = dynamic(() => import("./components/RegisterENS"), {
  ssr: false,
});

const ChatInterface = dynamic(() => import("./components/ChatInterface"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              ENS Chat Dapp
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience decentralized messaging powered by Ethereum Name Service.
              Connect, chat, and own your digital identity in a censorship-resistant platform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🌐</span>
                  ENS Registration
                </CardTitle>
                <CardDescription>
                  Secure your digital identity with an Ethereum Name Service domain.
                  Register, manage, and connect your ENS name to start messaging.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RegisterENS />
              </CardContent>
            </Card>

            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  Decentralized Chat
                </CardTitle>
                <CardDescription>
                  Engage in secure, private conversations using blockchain technology.
                  Your messages are encrypted and your identity is protected.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChatInterface />
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4 py-8">
            <h2 className="text-2xl font-semibold">Why Choose ENS Chat?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-3xl">🔒</div>
                <h3 className="font-semibold">Censorship Resistant</h3>
                <p className="text-sm text-muted-foreground">
                  No central authority can control or shut down your conversations
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">👤</div>
                <h3 className="font-semibold">Own Your Identity</h3>
                <p className="text-sm text-muted-foreground">
                  Your ENS name is your permanent digital identity across the web
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">⚡</div>
                <h3 className="font-semibold">Instant Messaging</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time communication with end-to-end encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
