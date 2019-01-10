import INodeOption from './types/INodeOption'

export default abstract class Node {
  constructor(config: INodeOption) {}
  setStyle(prop: string, key: string | number) {}
  setValue() {}
  paint() {}
}
