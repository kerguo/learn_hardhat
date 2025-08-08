const { ethers } = require("hardhat")
const { expect } = require("chai")

describe("MyToken", async () => {

    const initialSupply = 1000000

    let myToken
    let myTokenAddress

    beforeEach(async () => {
        console.log("beforeEach .....waiting 2 seconds  ")
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("start.....running  ")

        const MyTokenFactory = await ethers.getContractFactory("MyToken")
        myToken = await MyTokenFactory.deploy(initialSupply)
        myToken.waitForDeployment()
        myTokenAddress = await myToken.getAddress()

        
        // expect(myToken).to.be.properlyDeployed()

        expect(myTokenAddress.length).to.greaterThan(0)
        console.log("myToken deployed to: ", myTokenAddress)   
    })

    it("test1 验证合约 name, symbol, totalSupply", async () => {
        console.log(".....test1 .....")

        // 验证 name
        expect(await myToken.name()).to.equal("MyToken")

        // 验证 symbol
        expect(await myToken.symbol()).to.equal("MTK")

        // 验证 totalSupply
        const totalSupply = await myToken.totalSupply()
        console.log("totalSupply: ", totalSupply)
        expect(totalSupply).to.equal(initialSupply)

        // 验证 balanceOf
        const balance = await myToken.balanceOf(myTokenAddress)
        console.log("balance: ", balance)
        // expect(balance).to.equal(initialSupply)
    })

    it("test2", async () => {
        console.log(".....test2 .....")
    })
})