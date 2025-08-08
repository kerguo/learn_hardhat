const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MyNFTModule", (m) => {
  const initialSupply = m.getParameter("initialSupply", 100);

  const myNFT = m.contract("MyNFT", [initialSupply]);

  return { myNFT };
});
