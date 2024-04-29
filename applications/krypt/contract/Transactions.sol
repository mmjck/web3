pragma solidity ˆ0.8.0;

import "hardhat/console.sol";

contract Transactions {
    uint256 count;
   
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
  
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;


    function getTransactionCount() public view returns (uint256){
        return count;
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        count += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword))
        
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);

    }


}