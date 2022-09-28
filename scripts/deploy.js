const { ethers } = require("hardhat");

async function main() {
  const contract = await ethers.getContractFactory("WhiteList");
  const deployContract = await contract.deploy(10);
  await deployContract.deployed();
  console.log("Deployed to address" + deployContract.address);
}
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
