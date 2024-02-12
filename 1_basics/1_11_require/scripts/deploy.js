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

  let exceptionMsg = false;
  try {
    let retVal = await contractInstance.f(1)
    console.log(`ret val=${retVal}`)
  } catch (e) {
    console.log(e.message)
    if(e.message.includes('x must be even')) {
      exceptionMsg = true
    }
  }
  if (exceptionMsg) {
    console.log('SUCCESS');
  } else {
    console.log('FAILURE')
    throw Error("exception from f() should have thrown an exception, that contains the message \"x must be even\"")
  }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
