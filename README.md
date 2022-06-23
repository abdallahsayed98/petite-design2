# What is this?

Get perfect style, adding events and hide elements for the none-designer.

# Installation

`npm i petite-design2 --save`

## Selector

petite-designer2 supports 3 selectors types:

* *.className*  - _.className_
* *#idSelector* - _#id_
* *tagSelector* - _<tag>_


## setStyleUsingSelector(selector, options)

```
import { setStyleUsingSelector } from 'petite-design';

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
```
import { addEventUsingSelector } from 'petite-design';

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

__hideUsingSelector()__ is function that used to hide the element(s)

