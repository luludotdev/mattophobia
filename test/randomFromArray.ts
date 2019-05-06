import test from 'ava'
import { randomFromArray } from '../src/utils'

const testArray = ['a', 'b']

test('is a function', t => {
  return t.is(typeof randomFromArray, 'function')
})

test('picks a random element from an array', t => {
  for (let i = 0; i < 20; i++) {
    const rand = randomFromArray(testArray)
    t.assert(testArray.includes(rand))
  }
})

test('does not select the previous element again', t => {
  for (let i = 0; i < 20; i++) {
    const rand = randomFromArray(testArray, 'a')
    t.is(rand, 'b')
  }
})
