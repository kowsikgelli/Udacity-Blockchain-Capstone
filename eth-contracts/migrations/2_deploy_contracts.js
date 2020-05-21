// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var customERC721Token = artifacts.require("customERC721Token.sol");
module.exports = function(deployer) {
  deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier);
  deployer.deploy(customERC721Token);
};
// Deploying 'Verifier'
//    --------------------
//    > transaction hash:    0x7765d94894f13def2bdbacce0bcb887ba36328da74c12432d897e1f082626847
//    > Blocks: 1            Seconds: 17
//    > contract address:    0x24285A789E89fF8d65146d3f269f79F3B0533292
//    > block number:        6522611
//    > block timestamp:     1589994605
//    > account:             0xd4EC3fde48E69c06a2312A7a6F7DCaf239d09C40
//    > balance:             0.682856322
//    > gas used:            977754 (0xeeb5a)
//    > gas price:           20 gwei
//    > value sent:          0 ETH
//    > total cost:          0.01955508 ETH

//    Pausing for 2 confirmations...
//    ------------------------------
//    > confirmation number: 1 (block: 6522612)
//    > confirmation number: 2 (block: 6522613)

//    Deploying 'SolnSquareVerifier'
//    ------------------------------
//    > transaction hash:    0x133d71530a5ad661cdf26bd78295ba6d4437e04a55fdc13960e2849f5fdb487e
//    > Blocks: 1            Seconds: 21
//    > contract address:    0x3a8a1dcA6a9b6E991136cfFF9bF1ABd17f6b2e25
//    > block number:        6522615
//    > block timestamp:     1589994665
//    > account:             0xd4EC3fde48E69c06a2312A7a6F7DCaf239d09C40
//    > balance:             0.602609282
//    > gas used:            4012352 (0x3d3940)
//    > gas price:           20 gwei
//    > value sent:          0 ETH
//    > total cost:          0.08024704 ETH

//    Pausing for 2 confirmations...
//    ------------------------------
//    > confirmation number: 1 (block: 6522616)
//    > confirmation number: 2 (block: 6522617)

//    Deploying 'customERC721Token'
//    -----------------------------
//    > transaction hash:    0x00d99ac3806f73f715e781984d4481346176d80ca178f420c857c9af4b9691cd
//    > Blocks: 0            Seconds: 9
//    > contract address:    0x22fEeA35352EB6841F5Aa93791DD8D304d1D8EAb
//    > block number:        6522618
//    > block timestamp:     1589994710
//    > account:             0xd4EC3fde48E69c06a2312A7a6F7DCaf239d09C40
//    > balance:             0.546849102
//    > gas used:            2788009 (0x2a8aa9)
//    > gas price:           20 gwei
//    > value sent:          0 ETH
//    > total cost:          0.05576018 ETH

//    Pausing for 2 confirmations...
//    ------------------------------
//    > confirmation number: 1 (block: 6522619)
//    > confirmation number: 2 (block: 6522620)

//    > Saving migration to chain.
//    > Saving artifacts
//    -------------------------------------
//    > Total cost:           0.1555623 ETH

