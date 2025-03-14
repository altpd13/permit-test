// Copyright 2024 minseok.kim
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
export const masterMinterAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_minterManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_controller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_worker",
        type: "address",
      },
    ],
    name: "ControllerConfigured",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    name: "ControllerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decrement",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAllowance",
        type: "uint256",
      },
    ],
    name: "MinterAllowanceDecremented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_increment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newAllowance",
        type: "uint256",
      },
    ],
    name: "MinterAllowanceIncremented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_allowance",
        type: "uint256",
      },
    ],
    name: "MinterConfigured",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldMinterManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newMinterManager",
        type: "address",
      },
    ],
    name: "MinterManagerSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_controller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_worker",
        type: "address",
      },
    ],
    name: "configureController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newAllowance",
        type: "uint256",
      },
    ],
    name: "configureMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allowanceDecrement",
        type: "uint256",
      },
    ],
    name: "decrementMinterAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinterManager",
    outputs: [
      {
        internalType: "contract MinterManagementInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    name: "getWorker",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allowanceIncrement",
        type: "uint256",
      },
    ],
    name: "incrementMinterAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    name: "removeController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newMinterManager",
        type: "address",
      },
    ],
    name: "setMinterManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
