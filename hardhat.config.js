require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/VcOdl6nwBDOZAe_kILOFZlBCcXug67k_',
      accounts: ['7567ec9cb6a8a6df156c896e86109777dd6b139de7c0920415ddd3aae15c5420'],
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
