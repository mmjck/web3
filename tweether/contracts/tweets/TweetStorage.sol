// SPDX-License-Identifier: MIT 
pragma solidity >=0.7.0 <0.9.0;

import '../helpers/BaseStorage.sol';

contract TweetStorage is BaseStorage{
    struct Tweet {
        uint id;
        string text;
        uint userId;
        uint postedAt;
    }


    uint latestTweetId = 0;

    mapping(uint => Tweet) public tweets;


    function createTweet(uint _userId, string memory _text) public onlyController returns (uint){
        latestTweetId += 1;
        tweets[latestTweetId] = Tweet(latestTweetId, _text, _userId, block.timestamp);
        return latestTweetId;
    }

}