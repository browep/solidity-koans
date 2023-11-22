// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract ByteArraysContract {

    bytes8 myBytes8;

    constructor() {
        myBytes8 = hex'0102030405060708';
    }

    function getShiftedBytes() public view returns (bytes8)  {
        return myBytes8 << ???;
    }

    function getArrayAtIndex() public view returns (bytes1) {
        return myBytes8[???];
    }
}
