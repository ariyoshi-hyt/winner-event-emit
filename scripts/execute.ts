import { ethers } from "hardhat";

const main = async () => {
  const contractAddress = "0x07B6AdCd32DefD6325cDF104Bd67127ab56A0Bf9";
  const Contract = await ethers.getContractFactory("Test");
  const contract = Contract.attach(contractAddress);

  const result = await contract.test(
    "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"
  );
  console.log("Result of test():", result.toString());
  console.log("Transaction executed successfully");
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
