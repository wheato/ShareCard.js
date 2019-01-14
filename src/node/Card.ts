import Node from './Node'
import SDNodeFactory, { } from './SDNodeFactory'
import Stage from '../stage/Stage'

export default class Card extends Node {
  private elems: Array<Node>

  constructor(
    config: NodeOption,
    elems: Array<ChildNodeOption>,
    stage: Stage) {
    super(config, stage)
    this.elems = this.createChildren(elems)
  }

  private createChildren(elems: Array<ChildNodeOption>): Array<Node> {
    const fac = new SDNodeFactory()
    return elems.map(option => fac.create(option, this.stage))
  }

  setStyle(prop: string, value: number | string) {
    this.styles[prop] = value
  }

  setValue() {}

  append(elem: Node) {
    elem.setStage(this.stage)
    this.elems.push(elem)
  }

  paint() {
    // todo: Draw card Self
    
    this.elems.forEach(elem => {
      elem.paint()
    })
  }

  exportBlob(cb: BlobCallback, type?: string, quality?: number) {
    this.stage.toBlob(cb, type, quality)
  }

  exportBase64(type: 'jpg' | 'png' = 'jpg', quality: number = 0.9) {
    if (type === 'jpg') {
      if (quality <= 0 || quality > 1) {
        throw new Error('Quality range is [0, 1].')
      }
      return this.stage.toDataURL('jpg', quality)
    } else if (type === 'png') {
      return this.stage.toDataURL()
    } else {
      throw new Error('Image Type must be jpg or png.')
    }
  }
}
