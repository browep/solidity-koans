// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// import { randomBytes } from 'crypto'
const {randomBytes} = require('crypto')

const hre = require("hardhat");

function toHexString(byteArray) {
  return Array.from(byteArray, function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('')
}

async function main() {
    let contractName = "C";

    const contractDeploy = await hre.ethers.deployContract(contractName);

    await contractDeploy.waitForDeployment();
    const contractClass = await hre.ethers.getContractFactory(contractName);

    console.log(
        `${contractName} contract deployed to ${contractDeploy.target}`
    );
    const contractInstance = contractClass.attach(contractDeploy.target)

    let salt = randomBytes(32);
    console.log(`salt: ${toHexString(salt)}`)
    try {
        let retVal = await contractInstance.createDSalted(salt, 2)
        // if call does not revert, then declare success
        console.log('SUCCESS')
    } catch (e) {
        console.log('FAILURE')
        throw e
    }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
