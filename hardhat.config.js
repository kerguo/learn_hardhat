require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  settings: {
    optimizer: {
      enabled: true,
      runs: 50,
    },
  },
  networks:{
    localhost:{
      url:"http://127.0.0.1:8545"
    },
    sepolia:{
      url:`https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


//0x2AAC7437aA0BB2dd6eBA9bee67F577d47332AECe

// MyNFT address
//0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512