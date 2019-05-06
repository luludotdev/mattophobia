import test from 'ava'
import { randomFromArray } from '../src/utils'

test('is a function', t => {
  return t.is(typeof randomFromArray, 'function')
})
