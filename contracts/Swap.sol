// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "./IAlphaToken.sol";
import "./IBetaToken.sol";

contract Swap {

    address public alphaToken;
    address public betaToken;
    uint8 public exchangeRate;
    

    constructor(address _alphaToken, address _betaToken) {
        alphaToken = _alphaToken;
        betaToken = _betaToken;
        exchangeRate = 1;
    }

    function SwapAlphaToBeta(uint256 _amount) external {

        require(msg.sender != address(0), "hello mfer");

        require(_amount >0, "are you okay?");

        require(IAlphaToken(alphaToken).balanceOf(msg.sender) >=_amount,"alaye double your hustle!");

        uint _betaTokenEquivalentOfAlphaAmount = _amount * exchangeRate;

        require (IBetaToken(betaToken).balanceOf(address(this))>_betaTokenEquivalentOfAlphaAmount,"we don't have that amount of funds");
   
        require (IAlphaToken(alphaToken).transferFrom(msg.sender,address(this),_amount),"failed transaction");

        
        require (IBetaToken(betaToken).transfer(msg.sender,_betaTokenEquivalentOfAlphaAmount),"failed transaction");
    }


    function SwapBetaToAlpha(uint256 _amount) external {

        require(msg.sender != address(0), "hello mfer");

        require(_amount >0, "are you okay?");

        require(IBetaToken(betaToken).balanceOf(msg.sender) >_amount,"alaye double your hustle!");

        uint _alphaTokenEquivalentOfBetaAmount = _amount / exchangeRate;

        require (IAlphaToken(alphaToken).balanceOf(address(this))>_alphaTokenEquivalentOfBetaAmount,"we don't have that amount of funds");
   
        require (IBetaToken(betaToken).transferFrom(msg.sender,address(this),_amount),"failed transaction");

        require (IAlphaToken(alphaToken).transfer(msg.sender,_alphaTokenEquivalentOfBetaAmount),"failed transaction");
    }
}
