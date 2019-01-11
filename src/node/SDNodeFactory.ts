import SDImageNode from './SDImageNode'
import SDListNode from './SDListNode'
import SDTextNode from './SDTextNode'

import Node from './Node'

export default class SDNodeFactory {
  constructor() {
  }

  public create(config: ChildNodeOption ): Node {
    switch (config.type) {
      case NodeTypes.image:
        return new SDImageNode(config)
      case NodeTypes.text:
        return new SDTextNode(config)
      case NodeTypes.list:
        return new SDListNode(config)
      default:
        throw new Error('No such node type.')
    }
  }
}
