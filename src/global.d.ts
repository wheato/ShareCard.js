import ITextNodeOption from './node/types/ITextNodeOption'
import IImageNodeOption from './node/types/IImageNodeOption'
import IListNodeOption from './node/types/IListNodeOption'
import INodeOption from './node/types/INodeOption'
export {};

declare global {
  enum NodeTypes {
    'text',
    'image',
    'list',
  }
  type NodeType = NodeTypes
  type ChildNodeOption = ITextNodeOption | IImageNodeOption | IListNodeOption
  type NodeOption = INodeOption
}
