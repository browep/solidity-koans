// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

// see https://docs.soliditylang.org/en/v0.8.23/types.html#array-slices
contract Contract {

    constructor() {
    }

    function func1(bytes calldata chars) public pure returns (bool) {

        bytes memory actual = chars[0:4];

        bytes memory expected = abi.encodePacked("a","b","c","d");
        bytes memory actualPacked = abi.encodePacked(actual);
        console.log("actual=%s, expected=%s", string(actualPacked), string(expected));
        return keccak256(expected) == keccak256(actualPacked);
    }

}
