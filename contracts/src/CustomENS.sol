// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CustomENS {
    mapping(address => string) public addressToName;
    mapping(string => address) public nameToAddress;
    mapping(address => bool) public isRegistered;

    event Registered(address indexed user, string name);

    function register() external {
        require(!isRegistered[msg.sender], "Already registered");

        // Generate a unique name: "user" + first 8 chars of keccak256(address) + ".enschat"
        bytes32 hash = keccak256(abi.encodePacked(msg.sender));
        bytes memory nameBytes = new bytes(8);
        for (uint i = 0; i < 8; i++) {
            nameBytes[i] = bytes1(uint8(hash[i]) % 26 + 97); // lowercase letters
        }
        string memory name = string(abi.encodePacked("user", string(nameBytes), ".dude"));

        // Ensure uniqueness (though highly unlikely collision)
        require(nameToAddress[name] == address(0), "Name collision");

        addressToName[msg.sender] = name;
        nameToAddress[name] = msg.sender;
        isRegistered[msg.sender] = true;

        emit Registered(msg.sender, name);
    }

    function getName(address user) external view returns (string memory) {
        return addressToName[user];
    }

    function getAddress(string memory name) external view returns (address) {
        return nameToAddress[name];
    }
}
