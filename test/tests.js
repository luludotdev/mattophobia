/*
  Mattophobia Says
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Test Module
*/

const path = require('path')
const assert = require('assert')

const MattSays = require(path.join(__dirname, '..', 'src'))
const matt = new MattSays()

describe('Matt Generator', () => {
  describe('Installation', () =>  {
    it('should be a function', () =>  {
      assert.equal(typeof MattSays, 'function')
    })
  })
  describe('Usage', () =>  {
    it('should return a string', () =>  {
      assert.equal(typeof matt.generateSentence(2, 8), 'string')
    })
    it('should be at least minimum length', () =>  {
      assert(matt.generateSentence(2, 5).length >= 2)
    })
  })
})
