const hre = require("hardhat")

async function main(){
    const contractFactory = await hre.ethers.getContractFactory("Voting");
    const votingContrat  = await contractFactory.deploy(
        ["Maria", "Joao", "Mario", "Luana"],
        1
    );
    console.log("contract address", votingContrat.address);


    

}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
})