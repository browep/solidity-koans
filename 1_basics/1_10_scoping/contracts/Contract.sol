// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract C {
    function f() pure public returns (uint) {
        uint x = 1;
        {
            x = 2;
            uint x;
        }
        // what should x equal?
        require(x == ???, "x has incorrect value");
        return x;
    }
}