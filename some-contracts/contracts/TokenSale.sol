// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;


contract TokenSale {
    mapping(address => uint) public balances;
    uint public totalSupply;
    uint public totalRaised;


    function buyTokens()  public payable {
        uint amout = msg.value;
        balances[msg.sender] += amout;
        totalRaised += amout;
    }
}