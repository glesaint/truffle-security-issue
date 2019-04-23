module.exports = {
  plugins: [ "truffle-security" ],
  compilers: {
    solc: {
      version: "0.5.6",
    },
  },
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: "7800000"
    }
  }
};
