// SPDX-License-Identifier: MIT 
pragma solidity >=0.7.0 <0.9.0;

import '../helpers/Owned.sol';


contract BaseStorage is Owned { 
    address public controllerAddr;


    modifier onlyController() {
        require(msg.sender == controllerAddr);
        _;
    }

    function setControllerAddr(address _controllerAddress) public onlyOwner{
        controllerAddr = _controllerAddress;
    }
   
}

