"use client";

import { useAccount, useContractRead, useContractWrite } from "wagmi";

// Deployed contract addresses on Lisk Sepolia
const ENS_ADDRESS = "0x99c964560d911c6daa95242341119fcc704f43bc";

const ENS_ABI = [
  {
    inputs: [],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "user", type: "address" }],
    name: "isRegistered",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "user", type: "address" }],
    name: "getName",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];

export default function RegisterENS() {
  const { address } = useAccount();

  const { data: isRegistered } = useContractRead({
    address: ENS_ADDRESS,
    abi: ENS_ABI,
    functionName: "isRegistered",
    args: [address],
    chainId: 4202,
  });

  const { data: userName } = useContractRead({
    address: ENS_ADDRESS,
    abi: ENS_ABI,
    functionName: "getName",
    args: [address],
    chainId: 4202,
  });

  const { write: writeContract } = useContractWrite({
    address: ENS_ADDRESS,
    abi: ENS_ABI,
    functionName: "register",
  });

  const handleRegister = () => {
    writeContract();
  };

  if (!address) return null;

  if (isRegistered) {
    return <p>Your ENS: {userName as string}</p>;
  }

  return (
    <button
      onClick={handleRegister}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      Register ENS
    </button>
  );
}
