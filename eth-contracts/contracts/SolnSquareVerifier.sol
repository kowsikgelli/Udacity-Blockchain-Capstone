pragma solidity >=0.4.21 <0.6.0;
// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

import "./Verifier.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
import "./ERC721Mintable.sol";
contract SolnSquareVerifier is customERC721Token, Verifier{
// TODO define a solutions struct that can hold an index & an address

    struct Solution{
        uint index;
        address ad;
    }
// TODO define an array of the above struct

    // Solution public solutions;
// TODO define a mapping to store unique solutions submitted

    mapping(bytes32 => Solution)private solutions;

// TODO Create an event to emit when a solution is added

    event SolutionAdded(uint256 index, address ad);

// TODO Create a function to add the solutions to the array and emit the event

    function addSolution(bytes32 key, address addr, uint256 index)
        public
    {
        solutions[key].index = index;
        solutions[key].ad = addr;

        emit SolutionAdded(index, addr);
    }

// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
    

    function mintToken(address addr, uint256 tokenId,
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[2] memory input
        )
        public
        returns(bool)
    {

        require(verifyTx(a, b, c, input), "Solution is not valid");

        bytes32 solutionHash = keccak256(abi.encodePacked(a, b, c, input));

        require(solutions[solutionHash].ad == address(0x0), "Invalid!  Solution already exists");

        addSolution(solutionHash, addr, tokenId);

        return mint(addr, tokenId, "URI");
    }
  



}

























