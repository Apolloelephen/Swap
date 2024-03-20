// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

interface IBetaToken {
    
    function balanceOf(address _amount) external returns (uint256);

    function transferFrom(
        address _from,
        address _to,
        uint _amount
    ) external returns (bool);

    function allowance(address _to) external returns (bool);

    function transfer(address _to, uint _amount) external returns (bool);

    function approve(address _to, uint _amount) external returns (bool);

    function withdraw(uint _amount) external returns (bool);
}
