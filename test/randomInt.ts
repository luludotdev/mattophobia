import test from 'ava'
import { randomInt } from '../src/utils'

test('is a function', t => {
  return t.is(typeof randomInt, 'function')
})
