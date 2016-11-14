/*
  Matt Generator
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Bot Module
*/

const path = require('path')
const Twit = require('twit')
const config = require('./bot_config.js')
const T = new Twit(config)
const MATT = require(path.join(__dirname, '..', 'src'))
const matt = new MATT()

const _tweet = function _ () {
  let sentence = matt.generateSentence()
  T.post('statuses/update', { status: sentence }, (err) => {
    if (err) console.error(err)
  })
}

_tweet()

setInterval(() => {
  try {
    _tweet()
  } catch (e) {
    console.error(e)
  }
}, 1 * 60 * 60 * 1000)
