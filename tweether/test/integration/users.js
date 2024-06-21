

const UserStorage = artifacts.require('UserStorage')
const UserController = artifacts.require('UserController')

const {
    utils: { hexToString },
} = web3



const utils = require('../utils')
const { assertVMException } = utils



contract("users", () => {
    it("should create with controller", async () => {
        const controller = await UserController.deployed()

        const tx = await controller.createUser(
            "tristan",
            "Tristan",
            "Williams",
            "I like building stuff",
            "example@example.com"
        )
        assert.isOk(tx)
    })

    it("shouldn't create user without controller", async () => {
        const storage = await UserStorage.deployed()

        try {
            await storage.createUser(
                0x0,
                "tristan",
                "Tristan",
                "Williams",
                "I like building stuff",
                "example@example.com"
            )
            assert.fail();
        } catch (err) {
            assertVMException(err);
        }

    })


    it("should get user by ID", async () => {
        const storage = await UserStorage.deployed()
        const userId = 1
        const userInfo = await storage.profiles.call(userId)
        const username = userInfo[1]

        assert.equal(hexToString(username).replace(/\u0000/g, ''), "tristan")
    })

})