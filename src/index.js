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

if (!String.prototype.trim) {
  (function _ () {
		// Make sure we trim BOM and NBSP
    let rtrim = /^[\s\uFEFF\xA0]+l[\s\uFEFF\xA0]+$/g
    String.prototype.trim = function _ () {
      return this.replace(rtrim, '')
    }
  }())
}

String.prototype.capitalizeFirstLetter = function _ () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

class MattGenerator {
  constructor (swears = SWEARS_DEFAULT, ings = INGS_DEFAULT, standalone = STANDALONE_DEFAULT) {
    this.swears = swears
    this.ings = ings
    this.standalone = standalone
  }

  _randomIntFromInterval (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min)
  }

  _randomFromArray (arr, previous) {
    let selected = arr[Math.floor(Math.random() * arr.length)]

    if (selected === previous) return this._randomFromArray(arr, previous)
    else return selected
  }

  _randomEnding (isQuote, noQuestion) {
    let endings = ['. ', ', ', '! ', '. ', '! ', '. ', '? ', '. ']
    let ending = this._randomFromArray(endings)

    if (isQuote) {
      return '", '
    } else if (noQuestion && ending === '? ') {
      return this._randomEnding(isQuote, noQuestion)
    } else {
      return ending
    }
  }

  _randomlyPunctuation (i, count, paranthesis, hadOpening, isQuote) {
    let punctuation = [', ', ' &mdash; ', ', ', '; ', ', ', ': ', ', ']
    if (paranthesis && hadOpening && this._randomIntFromInterval(0, 50) > 35) {
      if (isQuote) return '] '
      else return ') '
    } else if (this._randomIntFromInterval(0, 100) > 95 && i < count - 1) {
      return this._randomFromArray(punctuation)
    } else {
      return ' '
    }
  }

  generateSentence (min = 4, max = 18) {
    let content = ''
    let isQuote = this._randomIntFromInterval(0, 100) > 90

    if (isQuote) content += '"'

    if (this._randomIntFromInterval(0, 100) < 80) {
      let words = this._randomIntFromInterval(min, max)
      let sentence = ''
      let lastWord = ''

      if (this._randomIntFromInterval(0, 100) > 90) {
        var paranthesis = true
        var hadOpening = false
      }

      for (let w = 0; w < words; w++) {
        if (w < 2 && words > 7 && paranthesis & !hadOpening) {
          if (isQuote) sentence += ' ['
          else sentence += ' ('

          hadOpening = true
        }

        if (this._randomIntFromInterval(0, 100) < 15 && w < words - 1) {
          lastWord = this._randomFromArray(this.ings, lastWord)
        } else {
          lastWord = this._randomFromArray(this.swears, lastWord)
        }

        let punctuation = this._randomlyPunctuation(w, words, paranthesis, hadOpening, isQuote)
        if (punctuation === ') ' || punctuation === '] ') paranthesis = false
        sentence += lastWord + punctuation
      }

      content += sentence.trim().capitalizeFirstLetter() + this._randomEnding(isQuote)
      return content
    } else {
      this.lastSentence = this._randomFromArray(this.standalone, this.lastSentence)
      this.lastSentence = this.lastSentence.capitalizeFirstLetter()
      content += this.lastSentence + this._randomEnding(isQuote, true)
      return content
    }
  }
}

module.exports = MattGenerator
