export const API_URL = "https://volta-explorer.energyweb.org/";
export const PRIVATE_KEY =
  "b6960e5b76310cd24a29baa825a3aca7d8917dab61ddb4f5e330061189c78df9";
export const contractAddress = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";
export const contractAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_desc",
        type: "string",
      },
    ],
    name: "addTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "maskAsFinished",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getAllTasks",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "desc",
            type: "string",
          },
          {
            internalType: "enum TaskToDo.TaskStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct TaskToDo.Task[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getTask",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "enum TaskToDo.TaskStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tasks",
    outputs: [
      {
        internalType: "string",
        name: "desc",
        type: "string",
      },
      {
        internalType: "enum TaskToDo.TaskStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
