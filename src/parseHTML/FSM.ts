import { tokenStatus } from './enums'

export default function FSM() {
  const status = [
    tokenStatus.TAG_OPEN,
    tokenStatus.TAG_NAME,
    tokenStatus.TAG_ATTR,
    tokenStatus.TAG_CLOSE,
    tokenStatus.DATA
  ]
  const START_STATUS = 4
  let current = START_STATUS
  let handler = null

  const reset = function () {
    current = START_STATUS
  }

  const next = function () {
    if (current < status.length - 1) {
      current += 1
    } else {
      current = 0
    }
    handler && handler(now())
  }

  const now = function () {
    return status[current]
  }

  const on = function (cb) {
    handler = cb
  }

  return {
    reset,
    next,
    now,
    on
  }
}