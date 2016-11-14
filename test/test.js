/*
  Mattophobia Says
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Test Module
*/

const path = require('path')
const MattSays = require(path.join(__dirname, '..', 'src'))
const matt = new MattSays()

console.log(matt.generateSentence())
