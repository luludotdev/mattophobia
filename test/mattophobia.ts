import test from 'ava'
import { mattophobia } from '../src'

test('is a function', t => {
  return t.is(typeof mattophobia, 'function')
})

test('returns an IterableIterator<string>', t => {
  const generator = mattophobia()
  t.assert(generator.next && typeof generator.next === 'function')
  t.assert(generator.return && typeof generator.return === 'function')
  t.assert(generator.throw && typeof generator.throw === 'function')

  for (let i = 0; i < 100; i++) {
    const sentence = generator.next().value
    t.assert(typeof sentence === 'string')
  }
})

test('respects maxLength', t => {
  const maxLength = 140
  const generator = mattophobia({ maxLength })

  for (let i = 0; i < 100; i++) {
    const sentence = generator.next().value
    t.assert(sentence.length <= maxLength)
  }
})
