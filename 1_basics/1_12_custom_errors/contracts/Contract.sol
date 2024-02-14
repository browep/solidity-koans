// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

error NotEven(
    uint input, // the input into the f method
    uint diff // the difference between the modulus and the expected
);

contract Contract {

    function f(uint x) public pure {
        // TODO: throw an error here of type "NotEven" if the input x is not even,
        // fill in the params of the error class with what is expected in deploy.js.
    }

}
