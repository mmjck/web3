async function main(){
    const contract = await hre.ethers.deployContract("TaskToDo");
    await contract.waitForDeployment();
    console.log("contract address", contract.target);

}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
})