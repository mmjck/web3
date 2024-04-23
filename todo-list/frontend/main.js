const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        }
      ],
      "name": "add",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "asFinished",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllTasks",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "enum TaskToDo.TaskStatus",
              "name": "status",
              "type": "uint8"
            }
          ],
          "internalType": "struct TaskToDo.Task[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getTask",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "enum TaskToDo.TaskStatus",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTasksCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tasks",
      "outputs": [
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "enum TaskToDo.TaskStatus",
          "name": "status",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
]
let WALLET_CONNECTED = ""
const CONTRACT_ADDRES = "0x382644F0681B43BCaf40925aDA7919BA8DF34366"
const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts")


    const signer = provider.getSigner()
    WALLET_CONNECTED = await signer.getAddress()
    var element = document.getElementById("metamasknotification")
    element.innerHTML = "Metamask is connected " + WALLET_CONNECTED
}


const getAllTasks = async () => {
    console.log("called");
    if (WALLET_CONNECTED != 0) {
        var p3 = document.getElementById("p3")
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        await provider.send("eth_requestAccounts")
        const signer = provider.getSigner()


        const contractInstance = new ethers.Contract(CONTRACT_ADDRES, abi, signer)
        p3.innerHTML = "Please wait, geeting all the tasks from the smart contract"
        var tasks = await contractInstance.getAllTasks()
        console.log(tasks);
        
    }else {
      p3.innerHTML = "Please connect metamask fisrt"
    }
}