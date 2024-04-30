pragma solidity ^0.8.16;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol';



contract AVAXGods is ERC1155, Ownable, ERC1155Supply {
    string public baseURI;
    uint256 public totalSupply;
    uint256 public constant DEVIL = 0;
    uint256 public constant GRIFFIN = 1;
    uint256 public constant FIREBIRD = 2;
    uint256 public constant KAMO = 3;
    uint256 public constant KUKULKAN = 4;
    uint256 public constant CELESTION = 5;


   uint256 public constant MAX_ATTACK_DEFEND_STRENGTH = 10;

   enum BattleStatus { PENDING, STARTED, ENDED }


   struct GameToken {
        string name;
        uint256 id;
        uint256 attackStrength;
        uint256 defenseStrength;
    
   }

}