# 💢 Mattophobia
[![NPM version](https://img.shields.io/npm/v/mattophobia.svg?maxAge=3600)](https://www.npmjs.com/package/mattophobia)
[![NPM downloads](https://img.shields.io/npm/dt/mattophobia.svg?maxAge=3600)](https://www.npmjs.com/package/mattophobia)
[![Build status](https://travis-ci.org/lolPants/mattophobia.svg)](https://travis-ci.org/lolPants/mattophobia)
[![Dependencies](https://img.shields.io/david/lolpants/mattophobia.svg?maxAge=3600)](https://david-dm.org/lolpants/mattophobia)
[![Coverage Status](https://coveralls.io/repos/github/lolPants/mattophobia/badge.svg?branch=master)](https://coveralls.io/github/lolPants/mattophobia?branch=master)

_Generate Mattophobia-like sentences_

## 💾 Installation
The package is on the NPM registry as `mattophobia`. Simply install it with your NPM client of choice.

## 🔧 Usage
First, import the module:
```js
const mattophobia = require('mattophobia')
```

`mattophobia()` is an [ES6 generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) that creates an [`IterableIterator<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
It returns an infinite series of Mattophobia strings.

### 💉 Options
You can pass in an object with options when instantiating the generator.

| Option | Type | Default | Description |
| - | - | - | - |
| `ings` | `string[]` | see `constants.ts` | Words ending with -ing for the generator |
| `swears` | `string[]` | see `constants.ts` | Profanity for the generator |
| `standalone` | `string[]` | see `constants.ts` | Standalone phrases for the generator |
| `minWords` | `number` | `4` | Minimum number of words per sentence |
| `maxWords` | `number` | `18` | Maximum number of words per sentence |
| `maxLength` | `number` | `140` | Maximum length of the string. Set to `< 1` for no limit. |

### 📝 Example
```js
// Import the module
const mattophobia = require('mattophobia')

// Limit to tweet length
const generator = mattophobia({ maxLength: 280 })
console.log(generator.next().value)
```

## 💙 Special Thanks
* [Python Fork](https://github.com/DerpyChap/mattophobia_says)
