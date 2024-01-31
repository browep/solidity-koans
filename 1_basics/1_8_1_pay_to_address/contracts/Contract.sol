// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Contract {

    constructor() {

    }

    function withdraw() public returns (bool) {
        address sendAddress = tx.origin;
        uint256 contractBalance = address(this).balance;

        return true;
    }

    receive() external payable {

    }


}
