// const abi = [
//     {
//       "inputs": [],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_description",
//           "type": "string"
//         }
//       ],
//       "name": "add",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         }
//       ],
//       "name": "asFinished",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "getAllTasks",
//       "outputs": [
//         {
//           "components": [
//             {
//               "internalType": "string",
//               "name": "description",
//               "type": "string"
//             },
//             {
//               "internalType": "enum TaskToDo.TaskStatus",
//               "name": "status",
//               "type": "uint8"
//             }
//           ],
//           "internalType": "struct TaskToDo.Task[]",
//           "name": "",
//           "type": "tuple[]"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         }
//       ],
//       "name": "getTask",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         },
//         {
//           "internalType": "enum TaskToDo.TaskStatus",
//           "name": "",
//           "type": "uint8"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "getTasksCount",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "name": "tasks",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "description",
//           "type": "string"
//         },
//         {
//           "internalType": "enum TaskToDo.TaskStatus",
//           "name": "status",
//           "type": "uint8"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     }
// ]
// module.exports = abi