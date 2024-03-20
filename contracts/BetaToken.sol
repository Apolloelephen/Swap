// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BetaToken is ERC20 {

    constructor() ERC20("BetaToken", "BT") {

        _mint(msg.sender, 1000);
    }
}
