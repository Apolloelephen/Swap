import { ethers } from "hardhat";

async function main() {
 
  const BetaToken = await ethers.deployContract("BetaToken");
  const deployedBetaToken= await BetaToken.waitForDeployment();

  const AlphaToken = await ethers.deployContract("AlphaToken");
  const deployedAlphaToken= await AlphaToken.waitForDeployment();

  const Swap = await ethers.deployContract("Swap", [deployedAlphaToken.target, deployedBetaToken.target]);
  const deployedSwap = await Swap.waitForDeployment();

  console.log(
    `AlphaToken is deployed to ${deployedAlphaToken.target}`
  );

  console.log(
    `BetaToken is deployed to ${deployedBetaToken.target}`
  );

  console.log(
    `SwapContract is deployed to ${deployedSwap.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
