const UserController = artifacts.require('UserController')
const UserStorage = artifacts.require('UserStorage');
const ContractManager = artifacts.require('ContractManager')

module.exports = (deployer) => {
  deployer.deploy(UserController)


  .then(() => {
    return UserController.deployed()
  })
  .catch((e) => console.log("error" + e))
  .then(userCtrl => {
    userCtrl.setManagerAddr(ContractManager.address)

    return Promise.all([
      ContractManager.deployed(),
      UserStorage.deployed(),
    ])
  })
  .then(([manager, storage]) => {
    return Promise.all([
      manager.setAddress("UserController", UserController.address),
      storage.setControllerAddr(UserController.address),
    ])
  })

}