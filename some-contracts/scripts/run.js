const main = async () => {
    const contractFactory = await hre.ethers.getContractFactory("Voting");
    const votingContrat  = await contractFactory.deploy(
        ["Maria", "Joao", "Mario", "Luana"],
        1
    );
    console.log("contract address", votingContrat.address);


    var tx = await votingContrat.getAllVotesOfCandidates()
    console.log(tx);


    tx = await votingContrat.vote(0)
    await tx.wait()


    tx = await votingContrat.getAllVotesOfCandidates()
    console.log(tx);
}


main().catch((error) =>{
    console.log(error);
    process.exitCode = 1
})