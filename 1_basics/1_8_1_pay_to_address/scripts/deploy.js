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

  // send funds to contract
  let signers = await hre.ethers.getSigners();
  let account1 = signers[0];

  let txParams = {to: contractDeploy.target, value: "0x02"};
  console.log(JSON.stringify(txParams))
  const fundTx = await account1.sendTransaction(txParams)
  console.log(`sent: ${JSON.stringify(fundTx)}`)

  let withdrawTxReceipt = await contractInstance.withdraw()
  const retVal = await hre.ethers.provider.getBalance(contractDeploy.target)
  let expected = 0;
  if (retVal != expected) {
    throw new Error(`FAILURE, was expecting ${expected}, got ${retVal}`)
  }
  console.log('SUCCESS')

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
