const Web3 = require("web3");
const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace this with the actual contract address after deployment
const contractABI = require("./artifacts/contracts/lock.sol/MyToken.json").abi;

const { ethers } = require("hardhat");

async function main() {
  const web3 = new Web3("http://localhost:8545"); // Update the URL to your local HardHat network if needed

  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];

  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy("My Token", "MTK", { from: deployer });

  await token.deployed();

  console.log("MyToken deployed to:", token.address);

  // Transfer some initial tokens to the contract owner
  await token.mint(deployer, ethers.utils.parseEther("1000"));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
