// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Contract {

    constructor() {

    }

    // take in an int and return and address, change the type to the expected type that
    // can be cast to an address type
    function intToAddress(??? intAddress) public pure returns (address) {
        return address(intAddress);
    }

    // take in a specific byte array and return an address
    function bytesToAddress(??? bytesAddress) public pure returns (address) {
        return address(bytesAddress);
    }

}
