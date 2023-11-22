// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract DynamicByteArrayContract {

    bytes byteArr1;
    bytes byteArr2;

    constructor() {
        byteArr1 = hex'01020304';
        byteArr2 = hex'05060708';
    }

    function concatArrays() public view returns (bytes memory) {
        return ???;
    }

    function getArrayOfArrays() public view returns (bytes[2] memory) {
        return ???;
    }

}
