const main = async () => {
    const factory = await hre.ethers.getContractFactory("ChatApp");
    const contract = await factory.deploy();

    console.log("Transactions address: ", contract.target);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();