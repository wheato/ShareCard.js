import parseHTML from '../src/parseHTML'

describe('Test HTML tokenizer', () => {
  const tplInline = '<image></image>'
  const inLineNode = {"attr": {}, "children": [], "data": "", "tag": "image"}

  const nestTpl = `
    <image>
      <text left="10">title</text>
    </image>
  `
  const nestNode = {
    "attr": {},
    "children": 
    [{
      "attr": {"left": "10"}, 
      "children": [],
      "data": "title", 
      "tag": "text"
    }],
    "data": "", 
    "tag": "image"
  }
  test('Test input template inline.', () => {
    const nodeTree = parseHTML(tplInline)
    console.log(nodeTree)
    expect(nodeTree).toEqual(inLineNode)
  })

  test('Test nesting template.', () => {
    const nodeTree = parseHTML(nestTpl)
    console.log(nodeTree)
    expect(nodeTree).toEqual(nestNode)
  })
})
