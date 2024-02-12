// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Contract {

    function f(uint x) public pure {
        require(x % 2 == 0, "x must be even");
    }

}
