// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Contract {

    struct Person {
        uint id;
        string name;
    }

    Person me;

    constructor() {
    }

    // a struct does not have required parameters.  update the deploy.js file to match what is expected
    // from a defaulted struct
    function getDefaultName() public view returns (string memory) {
        return me.name;
    }

    function getPerson() public view returns (uint, string memory) {
        // create person here
        Person memory person = Person({id: 1, name: "Alice"});
        return (person.id, person.name);
    }

}
