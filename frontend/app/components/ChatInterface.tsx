"use client";

import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Deployed contract addresses on Lisk Sepolia
const CHAT_ADDRESS = "0x6577189b1ede205c1f0b2fdf5537b9b144ab48c5";
const ENS_ADDRESS = "0x99c964560d911c6daa95242341119fcc704f43bc";

const CHAT_ABI = [
  {
    inputs: [{ name: "_content", type: "string" }],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMessages",
    outputs: [
      {
        components: [
          { name: "senderName", type: "string" },
          { name: "content", type: "string" },
          { name: "timestamp", type: "uint256" },
        ],
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const ENS_ABI = [
  {
    inputs: [{ name: "user", type: "address" }],
    name: "getName",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];

interface Message {
  senderName: string;
  content: string;
  timestamp: number | bigint;
}

function formatTimestamp(timestamp: number | bigint): string {
  const date = new Date(Number(timestamp) * 1000);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

  if (diffInHours < 24) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else if (diffInHours < 168) { // 7 days
    return date.toLocaleDateString([], { weekday: 'short' }) + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else {
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}

export default function ChatInterface() {
  const { address } = useAccount();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const { data: chatMessages, refetch } = useContractRead({
    address: CHAT_ADDRESS,
    abi: CHAT_ABI,
    functionName: "getMessages",
    chainId: 4202,
  });

  const { write: writeContract } = useContractWrite({
    address: CHAT_ADDRESS,
    abi: CHAT_ABI,
    functionName: "sendMessage",
  });

  useEffect(() => {
    if (chatMessages) {
      setMessages(chatMessages as Message[]);
    }
  }, [chatMessages]);

  const handleSend = () => {
    if (!input) return;
    writeContract({
      args: [input],
    });
    setInput("");
    setTimeout(() => {
      refetch();
    }, 3000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chat</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="mb-4 max-h-64">
          {messages.length === 0 && <p>No messages yet.</p>}
          {messages.map((msg, idx) => (
            <div key={idx} className="mb-2">
              <Badge>{msg.senderName}</Badge>: {msg.content}{" "}
              <span className="text-xs text-muted-foreground">
                {formatTimestamp(msg.timestamp)}
              </span>
            </div>
          ))}
        </ScrollArea>
        {address ? (
          <div className="flex gap-2">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message"
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        ) : (
          <p>Please connect your wallet to chat.</p>
        )}
      </CardContent>
    </Card>
  );
}
