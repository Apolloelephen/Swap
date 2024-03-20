import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Swap", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySwap() {
   
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const AlphaToken = await ethers.getContractFactory("AlphaToken");
    const alphaToken = await AlphaToken.deploy();

    const BetaToken = await ethers.getContractFactory("BetaToken");
    const betaToken = await BetaToken.deploy();

    const Swap = await ethers.getContractFactory("Swap");
    const swap = await Swap.deploy(alphaToken.target, betaToken.target);


    return {alphaToken, betaToken, owner, swap, otherAccount };
  }

  describe("Deployment", function () {
    it("Should check for token deployment", async function () {
      const { swap, alphaToken, betaToken } = await loadFixture(deploySwap);

      expect(await swap.alphaToken()).to.equal(alphaToken.target);

      expect(await swap.betaToken()).to.equal(betaToken.target);

      expect(await swap.exchangeRate()).to.equal(1)

  });

  describe("SwapTokenAlphatoBetaToken", function () {
    it("Should check for token deployment", async function () {
      const { swap, alphaToken, betaToken } = await loadFixture(deploySwap);

      expect(await swap.alphaToken()).to.equal(alphaToken.target);

      expect(await swap.betaToken()).to.equal(betaToken.target);

      expect(await swap.exchangeRate()).to.equal(1)

  });

    // it("Should set the right owner", async function () {
    //   const { lock, owner } = await loadFixture(deployOneYearLockFixture);

    //   expect(await lock.owner()).to.equal(owner.address);
    // });

    // it("Should receive and store the funds to lock", async function () {
    //   const { lock, lockedAmount } = await loadFixture(
    //     deployOneYearLockFixture
    //   );

    //   expect(await ethers.provider.getBalance(lock.target)).to.equal(
    //     lockedAmount
    //   );
    // });

    // it("Should fail if the unlockTime is not in the future", async function () {
    //   // We don't use the fixture here because we want a different deployment
    //   const latestTime = await time.latest();
    //   const Lock = await ethers.getContractFactory("Lock");
    //   await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
    //     "Unlock time should be in the future"
    //   );
    // });
  });

  
});

}); 