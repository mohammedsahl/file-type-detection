  export interface FileInterface {
    signature: number;
    signatureLen: number;
    validate: (buffer: Buffer) => boolean
  }