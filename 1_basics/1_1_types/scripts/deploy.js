// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const myValContractDeploy = await hre.ethers.deployContract("SimpleVal");

  await myValContractDeploy.waitForDeployment();
  const SimpleVal = await hre.ethers.getContractFactory("SimpleVal");


  console.log(
    `MyVal contract deployed to ${myValContractDeploy.target}`
  );
  const simpleValInstance = SimpleVal.attach(myValContractDeploy.target)
  const retVal = await simpleValInstance.getVal()
  console.log(`ret val=${retVal}`)
  if (retVal == 123) {
    console.log('SUCCESS')
  } else console.log(`FAILURE, was expecting 123, got ${retVal}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
