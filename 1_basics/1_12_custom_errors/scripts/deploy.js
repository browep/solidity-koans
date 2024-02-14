// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const {ethers, toBigInt} = require("ethers")

async function main() {
  let contractName = "Contract";

  const contractDeploy = await hre.ethers.deployContract(contractName);

  await contractDeploy.waitForDeployment();
  const contractClass = await hre.ethers.getContractFactory(contractName);

  console.log(
    `${contractName} contract deployed to ${contractDeploy.target}`
  );
  const contractInstance = contractClass.attach(contractDeploy.target)

  try {
    let retVal = await contractInstance.f(3)
    console.log('FAILURE, method should have reverted with an exception')
  } catch (e) {
    console.log(typeof e)
    console.log(e.message)
    console.log(JSON.stringify(e, null, " "))
    const errorData = e.data.data;
    const abi = [
      'function NotEven(uint256 input, uint256 diff)',
    ]
    const errorInterface = new ethers.Interface(abi)
    const decoded = errorInterface.decodeFunctionData(
        'NotEven(uint256,uint256)',
        errorData
    )

    console.log(`Returned NotEven error: input=${decoded.input}, diff=${decoded.diff}`);
    if (decoded.input === toBigInt(3) && decoded.diff === toBigInt(1)) {
      console.log("SUCCESS")
    } else {
      console.log(`FAILURE: expected input=3 && diff=1`)
    }
  }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
