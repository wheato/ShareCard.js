import { tokenTypes } from './enums'

function parserAttr(attr: string) {
  const attrObj = {}
  const reg = /(\w+)=\"([\w\/\:\.\?\&\-]+)\"/
  const parser = function (attr: string) {
    if (attr.length < 1) return
    let matched = attr.match(reg)
    if (!matched) return
    attrObj[matched[1]] = matched[2]
    parser(attr.slice(matched[0].length))
  }
  parser(attr)
  return attrObj
}

export default function tree (tokens: any[]) {
  let current = 1 // 忽略直接出现在顶层的文本

  function walk () {
    const node = {
      tag: '',
      attr: {},
      data: '',
      children: []
    }
    while (current < tokens.length) {
      let token = tokens[current]
      current += 1

      if (token.type === tokenTypes.END_TAG_OPEN) {
        while (token.type !== tokenTypes.TAG_CLOSE) {
          current += 1
          token = tokens[current]
        }
        return node
      }

      // self-closing tag
      if (token.type === tokenTypes.TAG_CLOSE && token.value === '/>') {
        return node
      }

      if (token.type === tokenTypes.START_TAG_OPEN) {
        node.children.push(walk())
      }

      if (token.type === tokenTypes.TAG_NAME) {
        node.tag = token.value
      }

      if (token.type === tokenTypes.TAG_ATTR) {
        node.attr = parserAttr(token.value.trim())
      }
      if (token.type === tokenTypes.DATA) {
        node.data = token.value
      }
    }
    return node
  }
  const ast = walk()
  return ast.children[0] 
}