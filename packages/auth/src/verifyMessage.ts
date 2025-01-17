import { utils, web3 } from "@coral-xyz/anchor";
import { createMessage } from "./createMessage";
import nacl from "tweetnacl";

export const verifyMessage = (
  signature: string,
  publicKey: web3.PublicKey,
  hash: string
) => {
  const message = createMessage(hash);
  if (!message) {
    return false;
  }


  const result = nacl.sign.detached.verify(
    message,
    utils.bytes.bs58.decode(signature),
    publicKey.toBuffer()
  );

  return result;
};
