import Node from './Node'
import ITextNodeOption from './types/ITextNodeOption'

export default class SDTextNode extends Node {
  private styles: string[]
  private value: string | number | string[]
  constructor(config: ITextNodeOption) {
    super(config)
  }
}