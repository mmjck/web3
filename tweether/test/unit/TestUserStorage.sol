// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "truffle/Assert.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
    UserStorage userStorage;

    constructor() {
        userStorage = new UserStorage();
        userStorage.setControllerAddr(address(this));
    }

    function testCreateFirstUser() public {
        uint _expectedId = 1;

        Assert.equal(
            userStorage.createUser(
                address(0),
                "tristan",
                "Tristan",
                "Williams",
                "I like building stuff",
                "example@example.com"
            ),
            _expectedId,
            "Should create user with ID 1"
        );
    }
}
