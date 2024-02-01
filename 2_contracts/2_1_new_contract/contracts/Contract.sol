// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract B {
    uint public x;
    constructor(uint a) payable {
        x = a;
    }
}

contract A {

    B public b = new B(1);
    constructor() {

    }

    function createB(uint a) public {
        b = new B(a);
    }

}
