// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
 import "hardhat/console.sol";

// see https://docs.soliditylang.org/en/v0.8.24/control-structures.html#creating-contracts

contract D {
    uint public x;
    constructor(uint a) {
        x = a;
    }
}

contract C {
    function createDSalted(bytes32 salt, uint arg) public {
        // This complicated expression just tells you how the address
        // can be pre-computed. It is just there for illustration and comparison

        address predictedAddress = address(uint160(uint(keccak256(abi.encodePacked(
            bytes1(0xff),
            address(this),
            salt,
            keccak256(abi.encodePacked(
                type(D).creationCode,
                abi.encode(arg)
            ))
        )))));

        console.log(string("predicted address"));
        console.log(predictedAddress);
        D d = new D{salt: salt}(arg);
        console.log(string("actual address"));
        console.log(address(d));

        require(address(d) == predictedAddress, "addresses did not match");
    }
}