import test from 'ava'
import { mattophobia } from '../src'

test('is a function', t => {
  return t.is(typeof mattophobia, 'function')
})
