// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");

  // await greeter.deployed();

  // console.log("Greeter deployed to:", greeter.address);

  // const IterableMapping = await ethers.getContractFactory("IterableMapping");
  // const iterableMapping = await IterableMapping.deploy();
  // await iterableMapping.deployed();
  // console.log("IterableMapping deploye to:", iterableMapping.address, " on BSC testnet");
  // const iterableMapping ={
  //   address: "0x72C682B0931ec1A799bbf880A57a92970bbe2ecc"
  // };

  // const SUNDAY = await ethers.getContractFactory("SUNDAY", {
  //   libraries: {
  //     IterableMapping: iterableMapping.address,
  //   },
  // });
  // const sunday = await SUNDAY.deploy();
  // await sunday.deployed();
  // console.log("SUNDAY deploye to:", sunday.address, " on BSC testnet");

  // const SUNDAYDividendTracker = await ethers.getContractFactory("SUNDAYDividendTracker", {
  //   libraries: {
  //     IterableMapping: iterableMapping.address,
  //   },
  // });
  // const sundayDividendTracker = await SUNDAYDividendTracker.deploy();
  // await sundayDividendTracker.deployed();
  // console.log("SUNDAYDividendTracker deploye to:", sundayDividendTracker.address, " on BSC testnet");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
