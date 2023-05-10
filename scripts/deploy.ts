import { ethers } from "hardhat";

async function main() {
  const Test = await ethers.getContractFactory("Test");
  const test = await Test.deploy();

  await test.deployed();

  console.log(
    `Test deployed to:${test.address}`,
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
