const { ethers } = require("hardhat")
const { expect } = require("chai")

const initialSupply = 100
let myNFT
let owner
let otherAccount

describe("MyNFT", async () => {
    beforeEach(async () => {
        [owner, otherAccount] = await ethers.getSigners()
        const myNFTContract = await ethers.getContractFactory("MyNFT")
        myNFT = await myNFTContract.connect(owner).deploy(initialSupply)
        myNFT.waitForDeployment()

    })

    it("test1 验证合约 name, symbol, totalSupply", async () => {
        
        // 验证 name
        const name = await myNFT.name()
        expect(name).to.equal("MyNFT")

        // 验证 symbol
        const symbol = await myNFT.symbol()
        expect(symbol).to.equal("MNFT")

        // // 验证 totalSupply
        const totalSupply = await myNFT.balanceOf(owner.address)
        expect(totalSupply).to.equal(initialSupply)
    })



})