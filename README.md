# Mattophobia Says [![Build Status](https://travis-ci.org/lolPants/mattophobia-says.svg?branch=master)](https://travis-ci.org/lolPants/mattophobia-says)
_Inside the Mind of Mattophobia as JS Bindings._

## Python Fork
There is a python fork of this project available [here](https://github.com/DerpyChap/mattophobia_says).

## Documentation

* MattSays
    * new MattSays([swears], [ings], [standalone], [merge])
    * .generateSentence([min], [max]) --> `string`

### new MattSays([swears], [ings], [standalone], [merge])

| Param | Type | Description |
| --- | --- | --- |
| [swears] | `string[]` | List of Swear Words |
| [ings] | `string[]` | List of -Ing Words |
| [standalone] | `string[]` | List of Standalone Words/ Phrases |
| [merge] | `boolean` | Merge with default arrays or just overwrite |

### mattSays.generate([min], [max]) --> `string`
Generate a random Mattophobia Style Sentence

**Kind**: instance method of `MattSays`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [min] | `number` | `4` | Minimum number of words |
| [max] | `number` | `18` | Maximum number of words |
