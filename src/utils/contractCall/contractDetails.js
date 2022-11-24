const contractAddress = "0x5ddeADd3dc5b80E8449208c5c33B1f33560b5155";
const ABI = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "value",
        type: "uint256[]",
      },
    ],
    name: "multisendNative",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

// const TOKEN_ABI = [
//   {
//     constant: true,
//     inputs: [],
//     name: "name",
//     outputs: [
//       {
//         name: "",
//         type: "string"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         name: "_spender",
//         type: "address"
//       },
//       {
//         name: "_value",
//         type: "uint256"
//       }
//     ],
//     name: "approve",
//     outputs: [
//       {
//         name: "",
//         type: "bool"
//       }
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "totalSupply",
//     outputs: [
//       {
//         name: "",
//         type: "uint256"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         name: "_from",
//         type: "address"
//       },
//       {
//         name: "_to",
//         type: "address"
//       },
//       {
//         name: "_value",
//         type: "uint256"
//       }
//     ],
//     name: "transferFrom",
//     outputs: [
//       {
//         name: "",
//         type: "bool"
//       }
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "decimals",
//     outputs: [
//       {
//         name: "",
//         type: "uint8"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         name: "_owner",
//         type: "address"
//       }
//     ],
//     name: "balanceOf",
//     outputs: [
//       {
//         name: "balance",
//         type: "uint256"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "symbol",
//     outputs: [
//       {
//         name: "",
//         type: "string"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         name: "_to",
//         type: "address"
//       },
//       {
//         name: "_value",
//         type: "uint256"
//       }
//     ],
//     name: "transfer",
//     outputs: [
//       {
//         name: "",
//         type: "bool"
//       }
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         name: "_owner",
//         type: "address"
//       },
//       {
//         name: "_spender",
//         type: "address"
//       }
//     ],
//     name: "allowance",
//     outputs: [
//       {
//         name: "",
//         type: "uint256"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     payable: true,
//     stateMutability: "payable",
//     type: "fallback"
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         name: "owner",
//         type: "address"
//       },
//       {
//         indexed: true,
//         name: "spender",
//         type: "address"
//       },
//       {
//         indexed: false,
//         name: "value",
//         type: "uint256"
//       }
//     ],
//     name: "Approval",
//     type: "event"
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         name: "from",
//         type: "address"
//       },
//       {
//         indexed: true,
//         name: "to",
//         type: "address"
//       },
//       {
//         indexed: false,
//         name: "value",
//         type: "uint256"
//       }
//     ],
//     name: "Transfer",
//     type: "event"
//   }
// ];

const bulksendContractDetails = {
  ABI,
  contractAddress,
  // TOKEN_ABI
};

export default bulksendContractDetails;
