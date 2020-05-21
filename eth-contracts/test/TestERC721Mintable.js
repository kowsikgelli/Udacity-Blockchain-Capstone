var ERC721MintableComplete = artifacts.require('customERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            for(let i = 2; i < 10; i++)
            {
                await this.contract.mint(accounts[i], i, "Glice");  // address, index, URI
            }
        })

        it('should return total supply', async function () {
            let totalSupply = await this.contract.totalSupply()
            assert.equal(totalSupply, 8, "incorrect supply value returned")
        })

        it('should get token balance', async function () {
            let tokenBalance = await this.contract.balanceOf(accounts[2])
            assert.equal(tokenBalance, 1, "Token balance should equal 1");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            let tokenURI = await this.contract.tokenURI(2);
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2", "URI is not correct")
        })

        it('should transfer token from one owner to another', async function () {
            let transfer = await this.contract.transferOwnership(accounts[3])
            let owner = await this.contract.getOwner.call();
            assert.equal(owner, accounts[3], "Owner should be accounts[3]")
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () {
            try {
                let mint = await this.contract.mint(accounts[2], 2, "Glice", { from: account_two });
            }
            catch(e) {
                return true;
            }
        })

        it('should return contract owner', async function () {
            let owner = await this.contract.getOwner.call();
            assert.equal(owner, account_one, "Owner should be account 1")
        })

    });
})