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

import { fiatTokenAbi } from "./fiatTokenAbi.js";
import { byteCode } from "./bytecode.js";
import { ethers } from "ethers";
import "dotenv/config";
import { masterMinterAbi } from "./masterMinterAbi.js";

async function mintKRWC() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

  const amount = ethers.parseUnits("100000000", 6);

  const ownerSigner = new ethers.Wallet(process.env.OWNER_PK, provider);

  const KRWCContract = new ethers.Contract(
    process.env.KRWC_PROXY_ADDRESS,
    fiatTokenAbi,
    ownerSigner
  );

  const KRWCMasterMinterContract = new ethers.Contract(
    process.env.KRWC_MASTER_MINTER_ADDRESS,
    masterMinterAbi,
    ownerSigner
  );

  // const result = await KRWCMasterMinterContract["configureController"](
  //   "0x03bCd7Fa3e90CdBa96693ab622F5994C8d591592",
  //   "0x03bCd7Fa3e90CdBa96693ab622F5994C8d591592"
  // );

  // const result = await KRWCMasterMinterContract["configureMinter"](amount);

  // const result = await KRWCContract["mint"](
  //   "0x5F1f799fddf2f2cD31217E20E773E393dDD6B788",
  //   amount
  // );

  console.log("-------RESULT-------");
  console.log(result);
  console.log("---------------------------");
}

async function mintUSDC() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

  const amount = ethers.parseUnits("100000000", 6);

  const ownerSigner = new ethers.Wallet(process.env.OWNER_PK, provider);

  const USDCContract = new ethers.Contract(
    process.env.USDC_PROXY_ADDRESS,
    fiatTokenAbi,
    ownerSigner
  );
  const USDCMasterMinterContract = new ethers.Contract(
    process.env.USDC_MASTER_MINTER_ADDRESS,
    masterMinterAbi,
    ownerSigner
  );

  // const result = await USDCMasterMinterContract["configureController"](
  //   "0x03bCd7Fa3e90CdBa96693ab622F5994C8d591592",
  //   "0x03bCd7Fa3e90CdBa96693ab622F5994C8d591592"
  // );

  // const result = await USDCMasterMinterContract["configureMinter"](amount);

  // const result = await USDCContract["mint"](
  //   "0x5F1f799fddf2f2cD31217E20E773E393dDD6B788",
  //   amount
  // );

  console.log("-------RESULT-------");
  console.log(result);
  console.log("---------------------------");
}

// await mintUSDC();
await mintKRWC();
