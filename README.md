# Matt Generator
![](https://git.jackbaron.com/lolPants/matt-generator/badges/master/build.svg) 

## About
Inside the Mind of Mattophobia as JS Bindings  
By Jack Baron  
Copyright (c) Jack Baron 2016  
Licensed under ISC License

## Docs
Matt Swear Generator

**Kind**: global class  

* [MattGenerator](#MattGenerator)
    * [new MattGenerator([swears], [ings], [standalone], [options])](#new_MattGenerator_new)
    * [.generateSentence([min], [max])](#MattGenerator+generateSentence) ⇒ `string`

<a name="new_MattGenerator_new"></a>

### new MattGenerator([swears], [ings], [standalone], [options])

| Param | Type | Description |
| --- | --- | --- |
| [swears] | `Array` | List of Swear Words |
| [ings] | `Array` | List of -Ing Words |
| [standalone] | `Array` | List of Standalone Words/ Phrases |
| [options] | `Object` | List of Swear Words |

<a name="MattGenerator+generateSentence"></a>

### mattGenerator.generateSentence([min], [max]) ⇒ `string`
Generate a random Mattophobia Style Sentence

**Kind**: instance method of `[MattGenerator](#MattGenerator)`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [min] | `Integer` | `4` | Minimum number of words |
| [max] | `Integer` | `18` | Maximum number of words |
