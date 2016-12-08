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

const _shortSentence = () => {
  for (var i = 0; i < 10; i++) {
    console.log(matt.generateSentence(4, 9))
  }
}

_shortSentence()
