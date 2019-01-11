import Node from './Node'
import SDNodeFactory, { } from './SDNodeFactory'

export default class Card extends Node {
  private styles: string[]
  private value: string | number | string[]
  private elems: Array<Node>

  constructor(config: NodeOption, elems: Array<ChildNodeOption>) {
    super(config)
    this.elems = this.createChildren(elems)
  }

  private createChildren(elems: Array<ChildNodeOption>): Array<Node> {
    const fac = new SDNodeFactory()
    return elems.map(option => fac.create(option))
  }
  setStyle() {
  }
  setValue() {
  }
  paint() {
  }
}
