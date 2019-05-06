import test from 'ava'
import { capitalizeFirstLetter } from '../src/utils'

test('is a function', t => {
  return t.is(typeof capitalizeFirstLetter, 'function')
})

test('captializes first letter', t => {
  return t.is(capitalizeFirstLetter('string'), 'String')
})

test('preserves all caps', t => {
  return t.is(capitalizeFirstLetter('STRING'), 'STRING')
})

test('preserves random caps', t => {
  return t.is(capitalizeFirstLetter('sTrinG'), 'STrinG')
})
