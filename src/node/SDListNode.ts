import Node from './Node'
import IListNodeOption from './types/IListNodeOption'
import Stage from '../stage/Stage'

export default class SDListNode extends Node {
  constructor(config: IListNodeOption, stage?: Stage) {
    super(config, stage)
  }
}
