import { tokenStatus, tokenTypes } from './enums'
import FSM from './FSM'

export default function tokenzier(input: string) {
  const fsm = FSM()
  const tokens = []
  let index = 0
  let token = { type: 0, value: '' }

  fsm.on(() => (token = { type: 0, value: '' }))

  while (index < input.length) {
    let char = input[index]

    if (fsm.now() === tokenStatus.DATA) {
      if (char === '<') {
        token.type = tokenTypes.DATA
        tokens.push(token)
        fsm.next()
      } else {
        token.value += char
        index += 1
      }
      continue
    }

    if (fsm.now() === tokenStatus.TAG_OPEN) {
      if (char === '/') {
        token.type = tokenTypes.END_TAG_OPEN
        token.value += char
        index += 1
      } else if (char === '<') {
        token.type = tokenTypes.START_TAG_OPEN
        token.value = char
        index += 1
      } else {
        tokens.push(token)
        fsm.next()
      }
      continue      
    }

    if (fsm.now() === tokenStatus.TAG_NAME) {
      const WHITESPACE = /\s/
      if (WHITESPACE.test(char) || char === '>') {
        token.type = tokenTypes.TAG_NAME
        tokens.push(token)
        fsm.next()
      } else {
        token.value += char
        index += 1
      }
      continue
    }

    if (fsm.now() === tokenStatus.TAG_ATTR) {
      if (
        char === '>' ||
        (char === '/' && input[index + 1] === '>')
      ) { // 处理 self-closing tag
        token.type = tokenTypes.TAG_ATTR
        tokens.push(token)
        fsm.next()
      } else {
        token.value += char
        index += 1
      }
      continue
    }

    if (fsm.now() === tokenStatus.TAG_CLOSE) {
      if (char === '/') {
        token.value = char
      } else {
        token.value += char
        token.type = tokenTypes.TAG_CLOSE
        tokens.push(token)
        fsm.next()
      }
      index += 1
      continue
    }
  }
  return tokens
}
