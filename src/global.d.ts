export {};

declare global {
  enum NodeTypes {
    'text',
    'image',
    'list',
  }
  type NodeType = NodeTypes
}
