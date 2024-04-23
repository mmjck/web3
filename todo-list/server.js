require("dotenv").config();
const { abi } = require("./artifacts/contracts/TaskToDo.sol/TaskToDo.json")

const path = require('path')
const ethers = require('ethers')
const cors = require('cors');
var morgan = require('morgan')
const bodyParser = require('body-parser');

const express = require("express")

const app = express()
const port = 3000

const resolvedPath = path.join(__dirname, "frontend/pages/")

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({ credentials: false }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/static', express.static(path.join(__dirname, '/frontend')));
app.use('/static', express.static(path.join(__dirname, '/frontend/pages/home')));
app.use('/static', express.static(path.join(__dirname, '/frontend/pages/task-list')));
app.use('/static', express.static(path.join(__dirname, '/frontend/pages/mark-task')));

app.get("/", (req, res) => {
    res.sendFile(resolvedPath + "/home/page.html")
})

app.get("/task", (req, res) => {
    res.sendFile(resolvedPath + "/mark-task/page.html")
})

app.get("/mark-task", (req, res) => {
    res.sendFile(resolvedPath + "/task-list/page.html")
})




const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_URL = process.env.API_URL;
const CONTRACT_ADDRES = process.env.CONTRACT_ADDRES;


const provider = new ethers.providers.JsonRpcProvider(API_URL);

const signer = new ethers.Wallet(PRIVATE_KEY, provider)

const contractInstance = new ethers.Contract(CONTRACT_ADDRES, abi, signer)

app.post("/addTask", async (req, res) => {
    const { task } = req.body
    
    async function storeDataInBlockchain(data) {
        console.log("adding data")
        const tx = await contractInstance.add(data)
        await tx.wait()
    }
    await storeDataInBlockchain(task)
    res.send("The task has been registered in the smart contract")
})


app.post("/change-status/:id", async (req, res) => {
    const { id } = req.params


    async function storeDataInBlockchain(id) {
        console.log("changing the task status...")
        const tx = await contractInstance.asFinished(id)
        await tx.wait()
    }


    await storeDataInBlockchain(id)
    res.send("The task status has been changed in the smart contract")
})



app.listen(port, function () {
    console.log(`App is listening on port ${port}`)
});