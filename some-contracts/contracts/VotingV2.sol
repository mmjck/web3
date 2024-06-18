// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;


contract Voting {
    struct Option {
        string name;
        uint count;
    }

    Option[] public options;


    function vote(uint index) public {
        options[index].count += 1;
    }
}