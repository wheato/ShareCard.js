import Node from './Node'
import IListNodeOption from './types/IListNodeOption'

export default class SDListNode extends Node {
  private styles: string[]
  private value: string | number | string[]
  constructor(config: IListNodeOption) {
    super(config)
  }
}