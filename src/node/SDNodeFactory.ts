import SDImageNode from './SDImageNode'
import SDListNode from './SDListNode'
import SDTextNode from './SDTextNode'

import Stage from '../stage/Stage'
import Node from './Node'

export default class SDNodeFactory {
  constructor() {
  }

  public create(config: ChildNodeOption, stage: Stage ): Node {
    switch (config.type) {
      case NodeTypes.image:
        return new SDImageNode(config, stage)
      case NodeTypes.text:
        return new SDTextNode(config, stage)
      case NodeTypes.list:
        return new SDListNode(config, stage)
      default:
        throw new Error('No such node type.')
    }
  }
}
