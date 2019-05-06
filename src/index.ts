import { INGS, STANDALONE, SWEARS } from './constants'
import { capitalizeFirstLetter, randomFromArray, randomInt } from './utils'

const randomEnding: (quote?: boolean, question?: boolean) => string = (
  quote,
  question
) => {
  const endings = ['. ', '! ', '. ', '! ', '. ', '? ', '. ']
  const ending = randomFromArray(endings)

  if (quote) return '." '
  else if (!question && ending === '? ') return randomEnding(quote, question)
  else return ending
}

const selectPunctuation: (
  i: number,
  count: number,
  parantheses: boolean,
  isOpen: boolean,
  quote: boolean
) => string = (i, count, parantheses, isOpen, quote) => {
  const punctuation = [', ', ' - ', ', ', '; ', ', ', ': ', ', ']

  if (parantheses && isOpen && randomInt(0, 50) > 35) {
    if (quote) return '] '
    else return ') '
  } else if (randomInt(0, 100) > 95 && i < count - 1) {
    return randomFromArray(punctuation)
  } else {
    return ' '
  }
}

interface IOptions {
  swears: string[]
  ings: string[]
  standalone: string[]

  maxLength: number
  minWords: number
  maxWords: number
}

export const defaultOptions: IOptions = {
  ings: INGS,
  standalone: STANDALONE,
  swears: SWEARS,

  maxLength: 140,
  maxWords: 18,
  minWords: 4,
}

export function* mattophobia(opts: Partial<IOptions> = defaultOptions) {
  const options: IOptions = { ...defaultOptions, ...opts }

  let lastSentence = ''
  const generate = (min: number, max: number) => {
    let content = ''
    const isQuote = randomInt(0, 100) > 90

    if (isQuote) content += '"'

    if (randomInt(0, 100) < 80) {
      const words = randomInt(min, max)
      let sentence = ''
      let lastWord = ''

      const noise = randomInt(0, 100) > 90
      let paranthesis = noise
      let hadOpening = !noise

      for (let w = 0; w < words; w++) {
        if (w < 2 && words > 7 && paranthesis && !hadOpening) {
          if (isQuote) sentence += ' ['
          else sentence += ' ('

          hadOpening = true
        }

        if (randomInt(0, 100) < 15 && w < words - 1) {
          lastWord = randomFromArray(options.ings, lastWord)
        } else {
          lastWord = randomFromArray(options.swears, lastWord)
        }

        const punctuation = selectPunctuation(
          w,
          words,
          paranthesis,
          hadOpening,
          isQuote
        )
        if (punctuation === ') ' || punctuation === '] ') paranthesis = false
        sentence += lastWord + punctuation
      }

      content += capitalizeFirstLetter(sentence.trim()) + randomEnding(isQuote)
      return content.slice(0, -1)
    } else {
      lastSentence = randomFromArray(options.standalone, lastSentence)
      lastSentence = capitalizeFirstLetter(lastSentence)
      content += lastSentence + randomEnding(isQuote, true)
      return content.slice(0, -1)
    }
  }

  while (true) {
    const sentence = generate(options.minWords, options.maxWords)
    if (sentence.length > options.maxLength) continue
    else yield sentence
  }
}

export default mattophobia
