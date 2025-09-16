// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ICustomENS {
    function isRegistered(address user) external view returns (bool);
    function getName(address user) external view returns (string memory);
}

contract Chat {
    struct Message {
        string senderName;
        string content;
        uint256 timestamp;
    }

    Message[] public messages;
    ICustomENS public ens;

    event MessageSent(string senderName, string content, uint256 timestamp);

    constructor(address _ens) {
        ens = ICustomENS(_ens);
    }

    function sendMessage(string memory _content) external {
        require(ens.isRegistered(msg.sender), "Must be registered in ENS");
        string memory senderName = ens.getName(msg.sender);
        messages.push(Message(senderName, _content, block.timestamp));
        emit MessageSent(senderName, _content, block.timestamp);
    }

    function getMessages() external view returns (Message[] memory) {
        return messages;
    }

    function getMessageCount() external view returns (uint256) {
        return messages.length;
    }
}
