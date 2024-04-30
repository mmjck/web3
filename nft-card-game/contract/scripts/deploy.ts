import { ethers } from "hardhat";
import console from 'console'


const _metadataUri = '';


async function deploy(name: string, ...params: [string]) {
    const contract = await ethers.getContractFactory(name);

    return await contract.deploy(...params).then((f) => f.deployed())
    
}

async function main() {
    const [admin] = await ethers.getSigners()

    console.log(`Deploying a smart contract...`);

    const AVAXGods = (await deploy('AVAXGods' ,_metadataUri)).connect(admin)

    console.log({ AVAXGods: AVAXGods.address });

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });