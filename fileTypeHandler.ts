import { FileInterface } from './interface'
import { ZIP } from './zip'
import { DOC } from './doc'
import { RTF } from './rtf'
import { XML } from './xml'

export const fileTypeHandler: { [key: string]: FileInterface} = {
  zip: ZIP,
  doc: DOC,
  rtf: RTF,
  xml: XML,
}