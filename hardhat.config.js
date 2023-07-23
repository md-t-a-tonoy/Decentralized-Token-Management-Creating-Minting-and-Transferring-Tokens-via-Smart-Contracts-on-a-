require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3"); // Add this line

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 31337, // Local HardHat Network
    },
  },
};
