import Node from './Node'
import IImageNodeOption from './types/IImageNodeOption'
import Stage from '../stage/Stage'

export default class SDImageNode extends Node {
  constructor(config: IImageNodeOption, stage?: Stage) {
    super(config, stage)
  }
}
