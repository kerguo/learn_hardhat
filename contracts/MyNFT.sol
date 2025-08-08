// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    
    constructor(uint256 initialSupply) ERC721("MyNFT", "MNFT") {
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }
}