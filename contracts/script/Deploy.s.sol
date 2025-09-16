// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import {CustomENS} from "../src/CustomENS.sol";
import {Chat} from "../src/Chat.sol";

contract DeployScript is Script {
    function run() external {
        vm.startBroadcast();

        CustomENS ens = new CustomENS();
        Chat chat = new Chat(address(ens));

        console.log("ENS deployed at:", address(ens));
        console.log("Chat deployed at:", address(chat));

        vm.stopBroadcast();
    }
}
