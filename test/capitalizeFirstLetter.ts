import test from 'ava'
import { capitalizeFirstLetter } from '../src/utils'

test('is a function', t => {
  return t.is(typeof capitalizeFirstLetter, 'function')
})
