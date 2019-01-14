import Node from './Node'
import ITextNodeOption from './types/ITextNodeOption'
import Stage from '../stage/Stage'

export default class SDTextNode extends Node {
  constructor(config: ITextNodeOption, stage?: Stage) {
    super(config, stage)
  }
}
