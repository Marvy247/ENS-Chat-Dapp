// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {Chat} from "../src/Chat.sol";
import {CustomENS} from "../src/CustomENS.sol";

contract ChatTest is Test {
    CustomENS ens;
    Chat chat;

    address user1 = address(0x123);
    address user2 = address(0x456);

    function setUp() public {
        ens = new CustomENS();
        chat = new Chat(address(ens));

        vm.prank(user1);
        ens.register();

        vm.prank(user2);
        ens.register();
    }

    function testSendMessage() public {
        vm.prank(user1);
        chat.sendMessage("Hello from user1");

        uint256 count = chat.getMessageCount();
        assertEq(count, 1);

        Chat.Message[] memory messages = chat.getMessages();
        assertEq(messages[0].senderName, ens.getName(user1));
        assertEq(messages[0].content, "Hello from user1");
    }

    function testSendMessageUnregistered() public {
        address unregistered = address(0x789);
        vm.prank(unregistered);
        vm.expectRevert("Must be registered in ENS");
        chat.sendMessage("Should fail");
    }
}
