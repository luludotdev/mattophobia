/*
  Matt Generator
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Main Module
*/

const SWEARS_DEFAULT = ['fuck',
  'shit',
  'cunt',
  'piss',
  'twat',
  'hell',
  'ass',
  'asshole',
  'motherfucker',
  'son of a bitch',
  'piece of shit',
  'wanker',
  'dickhead',
  'bitch',
  'cock',
  'assface',
  'wankface',
  'asshat',
  'penis',
  'shitface',
  'fucker',
  'prick',
  'jesus',
  'AIDS',
  'bastard',
  'god damn it',
  'shitfuck',
  'fuck',
  'FUCK',
  'FUCK FUCK FUCK FUCK FUCK',
  'nob']
const INGS_DEFAULT = ['fucking',
  'assing',
  'motherfucking',
  'goddamn',
  'damn',
  'holy',
  'wanking',
  'fucking',
  'shitting',
  'pissing']
const STANDALONE_DEFAULT = ['Jesus fucking Christ',
  'shut the fuck up',
  "I'm so angry right now",
  'fuck you',
  'shut up',
  'Jesus wept',
  'FUCK YOU',
  'I fucked up',
  'jesus christ on a fucking bike',
  'Jesus dicking tits',
  'cunty cunty cunt cunt']

class MattGenerator {
  constructor (swears = SWEARS_DEFAULT, ings = INGS_DEFAULT, standalone = STANDALONE_DEFAULT) {
    this.swears = swears
    this.ings = ings
    this.standalone = standalone
  }

  _randomFromArray (arr, previous) {
    var selected = arr[Math.floor(Math.random() * arr.length)]

    if (selected === previous) return this._randomFromArray(arr, previous)
    else return selected
  }
}

module.exports = MattGenerator
