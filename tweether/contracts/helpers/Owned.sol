// SPDX-License-Identifier: MIT 
pragma solidity >=0.7.0 <0.9.0;

contract Owned { 
    address public ownerAddr;

    constructor(){
        ownerAddr = msg.sender;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        require(_newOwner != address(0));

        ownerAddr = _newOwner;
    }


    modifier onlyOwner() {
        require(msg.sender == ownerAddr);
        _;
    }
}
