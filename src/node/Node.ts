import INodeOption from './types/INodeOption'
import Stage from '../stage/Stage'

export default abstract class Node {
  protected styles: string[]
  protected value: string | number | string[]
  protected stage: Stage

  constructor(config: INodeOption, stage?: Stage) {}

  setStyle(prop: string, key: string | number) {}

  setValue() {}

  paint() {}

  /* implements method */
  setStage(stage: Stage) {
    this.stage = stage
  }
}
