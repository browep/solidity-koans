// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

function max(uint[] storage arr) view returns (uint) {
    uint currMax;
    for (uint i = 0; i < arr.length; i++) {
        if (arr[i] > currMax) {
            currMax = arr[i];
        }
    }
    return currMax;
}

contract Contract {

    uint[] myVals = [1,4,9];

    using {max} for uint[];

    function getMax() public view returns (uint) {
        return myVals.max();
    }

}
