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

import { abi } from "./abi.js";
import { byteCode } from "./bytecode.js";
import { ethers } from "ethers";

async function getPermitSignature(signer, token, spender, value, deadline) {
  const network = await new ethers.JsonRpcProvider(
    "https://sepolia.optimism.io"
  ).getNetwork();
  const chainId = network.chainId;
  const version = "2";
  const owner = await signer.getAddress();
  const [nonce, name] = await Promise.all([
    token["nonces"](await signer.getAddress()),
    token["name"](),
  ]);

  const domain = {
    chainId,
    name,
    version,
    verifyingContract: await token.getAddress(),
  };

  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
  };

  const message = {
    owner,
    spender,
    value,
    nonce,
    deadline,
  };

  const sig = await signer.signTypedData(domain, types, message);
  return ethers.Signature.from(sig);
}

async function main() {
  if (/^0x[0-9a-fA-F]+$/.test(byteCode)) {
    console.log("✅ Bytecode is a valid hexadecimal string.");
  } else {
    console.error("❌ Bytecode contains invalid characters.");
  }
  let KRWCProxyAddress = "0x3Ad2CC296e2d8b07B84c7f473F73Fd5E1856e21e";
  const rpcUrl =
    "https://opt-sepolia.g.alchemy.com/v2/rRj1LGwZJ1WWAe2pW5fYSpudynxoUz6l";

  let vaultEOAPk =
    "fc0801fad6cd528c2354f0f336a73432cc8eecb4da171151ba34b18f8f97dd4a";
  let vaultEAO = "0x955feeEC36FE483b89586567CB436ec467D92a65";
  let endUser1Pk =
    "d38bd36e5f23be35d354bb15fcdc8cc0ec31dd60f115f32708f868d9a289dd60";
  let endUser1Addr = "0x40D189a252CE56377c372852Ea5429d70a2c91Bc";
  let endUser2Address = "0x61B9536A490E6511a20eb2de305a6a8884d88EE0";

  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const amount = ethers.parseUnits("100", 6);

  const signerEndUser1 = new ethers.Wallet(endUser1Pk, provider);
  const signerVaultEOA = new ethers.Wallet(vaultEOAPk, provider);
  const KRWCContract = new ethers.Contract(
    KRWCProxyAddress,
    abi,
    signerVaultEOA
  );

  const deadline = Math.floor(Date.now() / 1000) + 60 * 60; // 1시간 후 만료
  const vaultEOAAddr = await signerVaultEOA.getAddress();

  const { r, s, v } = await getPermitSignature(
    signerEndUser1,
    KRWCContract,
    vaultEOAAddr,
    amount,
    deadline
  );
  console.log(v);
  console.log(r);
  console.log(s);
  
  const result = await KRWCContract["permit"](
    endUser1Addr,
    vaultEOAAddr,
    amount,
    deadline,
    v,
    r,
    s
  );
  console.log("-------PERMIT_RESULT-------");
  console.log(result);
  console.log("---------------------------");

  setTimeout(async () => {
    const resultTransferFrom = await KRWCContract["transferFrom"](
      "0x40D189a252CE56377c372852Ea5429d70a2c91Bc",
      "0x61B9536A490E6511a20eb2de305a6a8884d88EE0",
      amount
    );
    console.log(resultTransferFrom);
    const balance1 = await KRWCContract["balanceOf"](endUser1Addr);
    const balance2 = await KRWCContract["balanceOf"](endUser2Address);
    console.log("user 1: " + balance1);
    console.log("user 2: " + balance2);
  }, 1000);
}

await main();
