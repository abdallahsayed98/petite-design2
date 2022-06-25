# What is this?

Get perfect style, adding events and hide elements for the non-designers.

# Installation

`npm i petite-design2 --save`

## or using the CDN
```
<script src="https://unpkg.com/petite-design2/src/index.js"></script>
```

## Selector

petite-designer2 supports 3 selectors types:

* *.className*  - _.className_
* *#idSelector* - _#id_
* *tagSelector* - _<tag>_


## setStyleUsingSelector(selector, options): 
The function is used to add simple style to the element(s) as:
* Shodow
* Margin
* Padding
* Background-color

### If you use library as NPM package
```
import { setStyleUsingSelector } from 'petite-design2';
```
### How to use
```
setStyleUsingSelector('.exampleName',{
    shadow_type: 'soft',
    padding: true,
    margin: true,
    backgroundColor: 'white'
});
```

### Options

petite-design2 supports 4 options, both of which are optional:

* *shadow_type* - _hard | soft_ (Defaults to soft)
* *padding* - _boolean_ (Defaults to false)
* *margin* - _boolean_ (Defaults to false)
* *backgroundColor* - _coloreName | hex | rgb | rgba_ (Defaults to white )

## addEventUsingSelector(selector, event, callback)
The function is used to add event element(s) as:

### If you use library as NPM package
```
import { addEventUsingSelector } from 'petite-design2';
```
### How to use
```
addEventUsingSelector('.exampleName','click',function(){
    console.log("log from click event");
})  
```

### event 

petite-design2 __addEventUsingSelector()__ supports all __dom__ events :

* __'click'__
* __'focus'__
* __'keypress'__
* __'etc...'__

### callback

__addEventUsingSelector()__ calllback fucntion it's a function that called after event trager


## hideUsingSelector(selector)
The function is used to hide the element(s) from the DOM

### If you use library as NPM package
```
import { hideUsingSelector } from 'petite-design2';
```
### How to use
```
hideUsingSelector(.exampleClass)
```


