// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint256 count;
    }

    Candidate[] public candidates;

    address owner;
    mapping(address => bool) public voters;

    uint256 public votingStart;
    uint256 public votingEnd;

    constructor(string[] memory _candidates, uint256 _durationInMinutes) {
        for (uint256 i = 0; i < _candidates.length; i++) {
            candidates.push(Candidate({name: _candidates[i], count: 0}));
        }

        owner = msg.sender;
        votingStart = block.timestamp;
        votingEnd = block.timestamp + (_durationInMinutes * 1 minutes);
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function add(string memory _name) public onlyOwner {
        candidates.push(Candidate({name: _name, count: 0}));
    }

    function vote(uint256 _index) public {
        require(!voters[msg.sender], "You have already voted !!");
        require(_index < candidates.length, "Invalid index");


        candidates[_index].count++;
        voters[msg.sender] = true;
        
    }

    function getAllVotesOfCandidates() public view returns(Candidate[] memory) {
        return candidates;
    }


    function getVotingStatus() public view returns(bool){
        return (block.timestamp >= votingStart && block.timestamp < votingEnd);
    }


    function getRemainingTime() public view returns (uint256){
        require(block.timestamp >= votingStart, "Voting has not started yet !!");

        if( block.timestamp >= votingEnd){
            return 0;
        }


        return votingEnd - block.timestamp;
        
    }
}
