/*
  Matt Generator
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Test Module
*/

const path = require('path')
const MATT = require(path.join(__dirname, '..', 'src'))
const matt = new MATT()

console.log(matt.generateSentence())
