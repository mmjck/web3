// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

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

    enum BattleStatus {
        PENDING,
        STARTED,
        ENDED
    }

    struct GameToken {
        string name;
        uint256 id;
        uint256 attackStrength;
        uint256 defenseStrength;
    }

    struct Player {
        address playerAddress;
        string playerName;
        uint256 playerMana;
        uint256 playerHealth;
        bool inBattle;
    }

    struct Battle {
        BattleStatus status;
        bytes32 battleHash;
        string name;
        address[2] players;
        uint8[2] moves;
        address winner;
    }

    Player[] public players;
    GameToken[] public gameTokens;
    Battle[] public battles;

    mapping(address => uint256) public playerInfo;
    mapping(address => uint256) public playerTokenInfo;
    mapping(string => uint256) public battleInfo;

    function isPlayer(address _addr) public view returns (bool) {
        if (playerInfo[_addr] == 0) {
            return false;
        }

        return true;
    }

    function getPlayer(address _addr) public view returns (Player memory) {
        require(isPlayer(_addr), "Player doesn't exist!");
        return players[playerInfo[_addr]];
    }

    function getAllPlayers() public view returns (Player[] memory) {
        return players;
    }

    function isPlayerToken(address _addr) public view returns (bool) {
        if (playerTokenInfo[_addr] == 0) {
            return false;
        }

        return true;
    }

    function getPlayerToken(
        address addr
    ) public view returns (GameToken memory) {
        require(isPlayerToken(addr), "Game token doesn't exist!");
        return gameTokens[playerTokenInfo[addr]];
    }

    function getAllPlayerTokens() public view returns (GameToken[] memory) {
        return gameTokens;
    }

    function isBattle(string memory _name) public view returns (bool) {
        if (battleInfo[_name] == 0) {
            return false;
        }
        return true;
    }

    function getBattle(
        string memory _name
    ) public view returns (Battle memory) {
        require(isBattle(_name), "Battle doesn't exist!");
        return battles[battleInfo[_name]];
    }

    function getAllBattles() public view returns (Battle[] memory) {
        return battles;
    }

    function updateBattle(
        string memory _name,
        Battle memory _newBattle
    ) private {
        require(isBattle(_name), "Battle doesn't exist");
        battles[battleInfo[_name]] = _newBattle;
    }

    // Events
    event NewPlayer(address indexed owner, string name);
    event NewBattle(
        string battleName,
        address indexed player1,
        address indexed player2
    );
    event BattleEnded(
        string battleName,
        address indexed winner,
        address indexed loser
    );
    event BattleMove(string indexed battleName, bool indexed isFirstMove);
    event NewGameToken(
        address indexed owner,
        uint256 id,
        uint256 attackStrength,
        uint256 defenseStrength
    );
    event RoundEnded(address[2] damagedPlayers);

    function setURI(string memory _uri) public onlyOwner {
        _setURI(_uri);
    }

    constructor(string memory _metadataURI) ERC1155(_metadataURI) {
        baseURI = _metadataURI;
        initialize();
    }

    function initialize() private {
        gameTokens.push(GameToken("", 0, 0, 0));
        players.push(Player(address(0), "", 0, 0, false));
        battles.push(
            Battle(
                BattleStatus.PENDING,
                bytes32(0),
                "",
                [address(0), address(0)],
                [0, 0],
                address(0)
            )
        );
    }

    function registerPlayer(
        string memory _name,
        string memory _gameTokenName
    ) external {
        require(!isPlayer(msg.sender), "Player already registered");

        uint256 _id = players.length;
        players.push(Player(msg.sender, _name, 10, 25, false));
        playerInfo[msg.sender] = _id;

        createRandomGameToken(_gameTokenName);

        emit NewPlayer(msg.sender, _name);
    }

    function createRandomGameToken(string memory _name) public {
        require(!getPlayer(msg.sender).inBattle, "Player is in a battle");
        require(isPlayer(msg.sender), "Please Register Player First");

        _createGameToken(_name);
    }

    function _createGameToken(
        string memory _name
    ) internal returns (GameToken memory) {
        uint256 randAttackStrength = _createRandomNum(
            MAX_ATTACK_DEFEND_STRENGTH,
            msg.sender
        );
        uint256 randDefenseStrength = MAX_ATTACK_DEFEND_STRENGTH -
            randAttackStrength;

        uint8 randId = uint8(
            uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) %
                100
        );
        randId = randId % 6;

        if (randId == 0) {
            randId++;
        }

        GameToken memory newGameToken = GameToken(
            _name,
            randId,
            randAttackStrength,
            randDefenseStrength
        );
    }

    function _createRandomNum(
        uint256 _max,
        address _sender
    ) internal view returns (uint256 randomValue) {
        uint256 randomNum = uint256(
            keccak256(
                abi.encodePacked(block.difficulty, block.timestamp, _sender)
            )
        );

        randomValue = randomNum % _max;
        if (randomValue == 0) {
            randomValue = _max / 2;
        }

        return randomValue;
    }
}
