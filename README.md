# Mattophobia Says

## About
Inside the Mind of Mattophobia as JS Bindings  
By Jack Baron  
Copyright (c) Jack Baron 2016  
Licensed under ISC License

## Documentation
Mattophobia Says

* MattSays
    * new MattSays([swears], [ings], [standalone], [options])
    * .generateSentence([min], [max]) ⇒ `string`

### new MattSays([swears], [ings], [standalone], [options])

| Param | Type | Description |
| --- | --- | --- |
| [swears] | `Array` | List of Swear Words |
| [ings] | `Array` | List of -Ing Words |
| [standalone] | `Array` | List of Standalone Words/ Phrases |
| [options] | `Object` | List of Swear Words |

### mattSays.generateSentence([min], [max]) ⇒ `string`
Generate a random Mattophobia Style Sentence

**Kind**: instance method of `MattSays`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [min] | `Integer` | `4` | Minimum number of words |
| [max] | `Integer` | `18` | Maximum number of words |