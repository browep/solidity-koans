// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const myStructContractDeploy = await hre.ethers.deployContract("SimpleStruct");

  await myStructContractDeploy.waitForDeployment();
  const SimpleStruct = await hre.ethers.getContractFactory("SimpleStruct");

  console.log(`SimpleStruct contract deployed to ${myStructContractDeploy.target}`);
  const simpleStructInstance = SimpleStruct.attach(myStructContractDeploy.target)
  const personAge = await simpleStructInstance.getPersonAge()
  console.log(`ret val=${personAge.toString()}`)
  if (personAge != 40) {
    console.log(`FAILURE: was expecting 40 for person age, got ${personAge}`)
    process.exit(1);
  }

  const personHeight = await simpleStructInstance.getPersonHeight()
  console.log(`ret val=${personHeight}`)

  if (personHeight != 100) {
    console.log(`FAILURE: was expecting 100 for person height, got ${personHeight}`)
    process.exit(1);
  }

  console.log('SUCCESS')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
