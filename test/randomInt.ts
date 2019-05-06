import test from 'ava'
import { randomInt } from '../src/utils'

test('is a function', t => {
  return t.is(typeof randomInt, 'function')
})

test('picks a random number', t => {
  for (let i = 0; i < 20; i++) {
    const rand = randomInt(0, 10)
    t.is(typeof rand, 'number')
  }
})

test('respects min/max', t => {
  for (let i = 0; i < 20; i++) {
    const rand = randomInt(0, 10)

    t.assert(rand >= 0)
    t.assert(rand <= 10)
  }
})
