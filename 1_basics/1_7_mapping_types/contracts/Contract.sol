// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Contract {

    mapping(address => uint) public grades;

    function update(address student, uint newGrade) public {
        grades[student] = newGrade;
    }

    // this function should return true if the grade of the tx sender is less than 65
    function amIFailing() public view returns (bool) {
       return grades[tx.origin] < 65;
    }
}
