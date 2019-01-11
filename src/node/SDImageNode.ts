import Node from './Node'
import IImageNodeOption from './types/IImageNodeOption'

export default class SDImageNode extends Node {
  private styles: string[]
  private value: string | number | string[]
  constructor(config: IImageNodeOption) {
    super(config)
  }
}