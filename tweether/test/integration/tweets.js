const TweetStorage = artifacts.require('TweetStorage')
const TweetController = artifacts.require('TweetController')

const utils = require('../utils')
const { assertVMException } = utils


contract("users", () => {
    // before(async () => {
    //     const tweetStorage = await TweetStorage.deployed()
    //     await tweetStorage.createTweet(1, "Hello, world!")
    // })

    // it("can get tweet", async () => {
    //     const storage = await TweetStorage.deployed()
            
        
    //     const tweet = await storage.tweets.call(1)

    //     const {id, text, userId} = tweet

    //     assert.equal(parseInt(id), 1)
    //     assert.equal(text, "Hello, world!")
    //     assert.equal(parseInt(userId), 1)   
    // })


    it("can get tweet", async () => {
        const storage = await TweetStorage.deployed()
            
        try {
            const tx = await storage.createTweet(1, "tristan")
            assert.fail();
        } catch (err) {
            assertVMException(err);
        } 
    })

    it("can create tweet with controller", async () => {
        const controller = await TweetController.deployed()
    
        const tx = await controller.createTweet(1, "Hello world!")
    
        assert.isOk(tx)
    })
})