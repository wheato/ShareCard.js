import tokenzier from './tokenzier'
import tree from './tree'

function formatHTML (tpl: string): string {
  let formated = tpl.replace(
    /\n/g, ' '
  ).replace( // 去多多余空格
    /\s+/g, ' '
  ).replace( // 去掉标签前后的空格
    /(\>)\s|\s(\<)/g,
    (...args) => {
      return args[1] ? args[1] : args[2]
    }
  )
  return formated
}

export default function parseHTML (tpl: string) {
  try {
    const input = formatHTML(tpl)
    let tokens = tokenzier(input)
    return tree(tokens)
  } catch (err) {
    throw err
  }
}
