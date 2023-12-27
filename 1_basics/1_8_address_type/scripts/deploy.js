// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  let contractName = "Contract";

  const contractDeploy = await hre.ethers.deployContract(contractName);

  await contractDeploy.waitForDeployment();
  const contractClass = await hre.ethers.getContractFactory(contractName);

  console.log(
    `${contractName} contract deployed to ${contractDeploy.target}`
  );
  const contractInstance = contractClass.attach(contractDeploy.target)

  let expectedAddress = '0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97';

  let retVal = (await contractInstance.intToAddress(BigInt('412311598482915581890913355723629879470649597847'))).toLowerCase()
  console.log(`ret val=${retVal}`)
  let expected = expectedAddress;
  if (retVal != expected) {
    throw new Error(`FAILURE, was expecting ${expected}, got ${retVal}`)
  }

  retVal = (await contractInstance.bytesToAddress(expectedAddress)).toLowerCase()
  console.log('SUCCESS')
  if (retVal != expected) {
    throw new Error(`FAILURE, was expecting ${expected}, got ${retVal}`)
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
