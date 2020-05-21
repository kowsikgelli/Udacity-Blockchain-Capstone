var SquareVerifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");


contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('testing SolnSquareVerifier', function () {
        beforeEach(async function () {
            let Verifier = await SquareVerifier.new({from: account_one})
            this.contract = await SolnSquareVerifier.new(Verifier.address, {from: account_one});
        })

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('new solution can be added to contract', async function() {

            let proof = {
                a: ["0x0bdefe0166f3bfb37c22d81a297a3218f0ecab42ffa1f19cac04b2f09f10e3f0", "0x1fe68ca3e1f555220b7c545e692306393a872244a2f6535ac758651b270dbacf"],
                b: [["0x191eb5aeea0ada2d4119bc4e224b537dd4f998dc2dfb3705e3dc43fc4fec1392", "0x185a3f6bc669f93c2b388a4e445a3a1de973846744db7c903e1a4d75990d31dc"], ["0x13c81809f7f47af9374d2e1a55e31edcb79709ff9393cc9b3e8d6f032515b91b", "0x0cd487bb3913e41524969acd8f00a47bfc735f5685527643ee5ae19dd0c1d4bb"]],
                c: ["0x2104f6d30c21db1e230760a244a1155782dcf4e9bf928ba010452e12f03dced2", "0x19c8c9eeb48b3992a3fce14aa8204af52d2d474962d5fc8255f62e8be65ab121"],
                input: ["0x0000000000000000000000000000000000000000000000000000000000000010", "0x0000000000000000000000000000000000000000000000000000000000000001"]
            }

            let mint = await this.contract.mintToken.call(account_two, 1,
                proof.a,
                proof.b,
                proof.c,
                proof.input)

            assert.equal(mint, true, "New solution cannot be added")

        })

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('a token can be minted', async function() {

            let mint = await this.contract.mint.call(account_two, 3, "Duplex")

            assert.equal(mint, true, "Token cannot be minted")

        })
    })
})