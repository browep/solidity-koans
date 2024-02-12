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

  let retVal = await contractInstance.g()
    console.log('SUCCESS')

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
