// Local Dependencies
const { SWEARS, INGS, STANDALONE } = require('./constants')

if (!String.prototype.trim) {
  (function _ () {
    // Make sure we trim BOM and NBSP
    let rtrim = /^[\s\uFEFF\xA0]+l[\s\uFEFF\xA0]+$/g
    String.prototype.trim = function trim () {
      return this.replace(rtrim, '')
    }
  }())
}

String.prototype.capitalizeFirstLetter = function capitalizeFirstLetter () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

/**
 * Mattophobia Says
 */
class MattSays {
  /**
   * @constructor
   * @param {string[]} [swears] List of Swear Words
   * @param {string[]} [ings] List of -Ing Words
   * @param {string[]} [standalone] List of Standalone Words/ Phrases
   * @param {boolean} [merge] Merge with default arrays or just overwrite
   */
  constructor (swears = SWEARS, ings = INGS, standalone = STANDALONE, merge = false) {
    if (merge) {
      this.swears = [...SWEARS, ...swears]
      this.ings = [...INGS, ...ings]
      this.standalone = [...STANDALONE, ...standalone]
    } else {
      this.swears = swears
      this.ings = ings
      this.standalone = standalone
    }
  }

  /**
   * Random number from Min/Max
   * @param {number} min Minimum Value
   * @param {number} max Maximum Value
   * @returns {number} Randomly generated number from the bounds
   * @private
   */
  _randomIntFromInterval (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min)
  }

  /**
   * Randomly pick a value from an Array
   * @param {Array} arr Array to pick from
   * @param {string} previous Previous pick (Prevents Duplication)
   * @returns {string} Random Pick
   * @private
   */
  _randomFromArray (arr, previous) {
    let selected = arr[Math.floor(Math.random() * arr.length)]

    if (selected === previous) return this._randomFromArray(arr, previous)
    else return selected
  }

  /**
   * Get a random sentence ending
   * @param {boolean} isQuote Is the sentence a quote?
   * @param {boolean} noQuestion Is the sentence NOT a question
   * @returns {string}
   * @private
   */
  _randomEnding (isQuote, noQuestion) {
    let endings = ['. ', '! ', '. ', '! ', '. ', '? ', '. ']
    let ending = this._randomFromArray(endings)

    if (isQuote) {
      return '." '
    } else if (noQuestion && ending === '? ') {
      return this._randomEnding(isQuote, noQuestion)
    } else {
      return ending
    }
  }

  /**
   * Randomly select punctuation for mid-sentence
   * @param {number} i I don't know
   * @param {number} count Count of something
   * @param {boolean} paranthesis Paranthesis yay or nay
   * @param {boolean} hadOpening Has it had an opening recently?
   * @param {boolean} isQuote Is the sentence a quote?
   * @returns {string}
   * @private
   */
  _randomlyPunctuation (i, count, paranthesis, hadOpening, isQuote) {
    let punctuation = [', ', ' - ', ', ', '; ', ', ', ': ', ', ']
    if (paranthesis && hadOpening && this._randomIntFromInterval(0, 50) > 35) {
      if (isQuote) return '] '
      else return ') '
    } else if (this._randomIntFromInterval(0, 100) > 95 && i < count - 1) {
      return this._randomFromArray(punctuation)
    } else {
      return ' '
    }
  }

  /**
   * Generate a random Mattophobia Style Sentence
   * @param {number} [min=4] Minimum number of words
   * @param {number} [max=18] Maximum number of words
   * @returns {string}
   */
  generate (min = 4, max = 18) {
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
      return content.slice(0, -1)
    } else {
      this.lastSentence = this._randomFromArray(this.standalone, this.lastSentence)
      this.lastSentence = this.lastSentence.capitalizeFirstLetter()
      content += this.lastSentence + this._randomEnding(isQuote, true)
      return content.slice(0, -1)
    }
  }
}

module.exports = MattSays
