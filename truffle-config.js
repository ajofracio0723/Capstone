module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",  // Ganache's default host
      port: 8545,         // Ganache's default port
      network_id: "*",    // Match any network id
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",  // Make sure to use the correct Solidity version
    },
  },
};