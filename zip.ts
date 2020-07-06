import { FileInterface } from './interface'

export const ZIP: FileInterface = {
  signature:0x50,
  signatureLen:1,
  validate(buffer) { return (buffer.subarray(0,(this.signatureLen))[0] === this.signature) }
}