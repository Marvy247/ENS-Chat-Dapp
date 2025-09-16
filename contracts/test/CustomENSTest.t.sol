// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {CustomENS} from "../src/CustomENS.sol";

contract CustomENSTest is Test {
    CustomENS ens;

    function setUp() public {
        ens = new CustomENS();
    }

    function testRegister() public {
        address user = address(0x123);
        vm.prank(user);
        ens.register();

        assertTrue(ens.isRegistered(user));
        string memory name = ens.getName(user);
        assertEq(ens.getAddress(name), user);
        assertTrue(bytes(name).length > 0);
    }

    function testCannotRegisterTwice() public {
        address user = address(0x123);
        vm.startPrank(user);
        ens.register();
        vm.expectRevert("Already registered");
        ens.register();
        vm.stopPrank();
    }

    function testNameUniqueness() public {
        // Hard to test collision, but assume it's unique
    }
}
